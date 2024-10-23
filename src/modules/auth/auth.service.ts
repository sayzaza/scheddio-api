import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

import { UsersService } from '../users/users.service';
import { SignInSuccessDto } from './dto/sign-in-success.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UsersService,
    ) {}

  async signIn(email: string, password: string): Promise<SignInSuccessDto> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isMatched = await compare(password, user.password);
    if (!isMatched) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user.id,
      username: user.name,
    }
    return {
      accessToken: await this.jwtService.signAsync({ ...user.toDto() }),
    };
  }
}
