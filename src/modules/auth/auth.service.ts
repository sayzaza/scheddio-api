import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';

import { SignInSuccessDto } from './dto/sign-in-success.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    ) {}

  async signIn(email: string, password: string): Promise<SignInSuccessDto> {
    const user = await this.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isMatched = await compare(password, user.encryptedPassword);
    if (!isMatched) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }
}
