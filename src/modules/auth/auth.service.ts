import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';

import { SignInSuccessDto } from './dto/sign-in-success.dto';
import { AuthUser } from './entities/auth-user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
    @InjectRepository(AuthUser)
    private usersRepository: Repository<AuthUser>,
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
    const payload = { sub: user.id };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  findOneByEmail(email: string): Promise<AuthUser> {
    return this.usersRepository.findOne({ where: { email } });
  }

  findOne(id: string): Promise<AuthUser> {
    return this.usersRepository.findOne({where: { id }});
  }
}
