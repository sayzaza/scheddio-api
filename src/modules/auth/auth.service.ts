import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';

import { SignInSuccessDto } from './dto/sign-in-success.dto';
import { SystemUser } from './entities/system-user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
    @InjectRepository(SystemUser)
    private usersRepository: Repository<SystemUser>,
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

  findOneByEmail(email: string): Promise<SystemUser> {
    return this.usersRepository.findOne({ where: { email } });
  }

  findOne(id: string): Promise<SystemUser> {
    return this.usersRepository.findOne({where: { id }});
  }
}
