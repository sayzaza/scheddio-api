import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
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

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
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
}
