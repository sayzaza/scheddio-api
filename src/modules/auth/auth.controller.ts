import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  Req, UnauthorizedException,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignInSuccessDto } from './dto/sign-in-success.dto';
import { AuthGuard } from './auth.guard';
import { UsersService } from '../users/users.service';
import { CustomerUserDto } from '../users/dto/customer-user.dto';
import { OauthUriDto } from './dto/oauth-uri.dto';
import { OAuthService } from '../../services/quickbooks/oauth.service';
import { LocalJwtService } from './local-jwt.service';
import { OAuthCallbackResponseDto } from './dto/oauth-callback-response.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
    private readonly oAuthService: OAuthService,
    private readonly jwtService: LocalJwtService,
  ) {}

  @ApiOperation({ summary: 'Login with email and password', description: '' })
  @ApiOkResponse({ type: () => SignInSuccessDto })
  @ApiUnauthorizedResponse({
    description: 'Authentication failed because email or password is incorrect',
  })
  @ApiBadRequestResponse({
    description: 'Email format is invalid or empty password provided',
  })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(
    @Body() { email, password }: SignInDto,
  ): Promise<SignInSuccessDto> {
    return await this.authService.signIn(email, password);
  }

  @ApiOperation({ summary: "Retrieves the user's profile" })
  @ApiBearerAuth()
  @ApiOkResponse({ type: () => CustomerUserDto })
  @ApiUnauthorizedResponse({ description: 'No authentication token provided or the token is already expired' })
  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req: any): Promise<CustomerUserDto> {
    const { id } = req.user;
    const user = await this.userService.findOne(id);
    return user.toDto();
  }

  @ApiOperation({ summary: 'Generate Intuit signin redirect URI' })
  @ApiOkResponse({ type: () => OauthUriDto })
  @Get('oauth-intuit-popup-uri')
  async getOauthIntuitPopupUri(@Req() req: any): Promise<OauthUriDto> {
    await this.oAuthService.setScopes('sign_in_with_intuit');
    const uri = this.oAuthService.intuitAuth.code.getUri({
      state: this.oAuthService.generateAntiForgery(req.session),
    });
    console.log('Redirecting to authorization uri:', uri);
    return {
      uri
    };
  }

  @ApiOperation({ summary: 'Callback url for intuit oAuth' })
  @Get('oauth-redirect-url')
  async oAuthRedirectUrl(@Req() req: any): Promise<OAuthCallbackResponseDto> {
    const { state, realmId } = req.query;
    if (!this.oAuthService.verifyAntiForgery(req.session, state)) {
      throw new UnauthorizedException('failed with anti-forgery verification');
    }
    try {
      const token = await this.oAuthService.getExchangeAccessToken(req.originalUrl);
      this.oAuthService.saveToken(req.session, token);
      req.session.realmId = realmId;
      const validated = await this.jwtService.validate(token.data.id_token);
      if (validated) {
        const redirectUrl = `${process.env.FRONTEND_OAUTH_REDIRECT_URI}?accessToken=${token.accessToken}`;
        return { redirectUrl };
      }
    } catch (e) {
      throw new UnauthorizedException(e.message);
    }
  }
}
