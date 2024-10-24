import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CustomerUser } from './entities/custom-user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(CustomerUser)
    private readonly userRepository: Repository<CustomerUser>,
  ) {}
  async create(payload: CreateUserDto) {
    const found = await this.findOneByEmail(payload.email);
    if (found) {
      throw new ForbiddenException('The email is already registered');
    }
    const user = new CustomerUser(payload.email, payload.password);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<CustomerUser> {
    return this.userRepository.findOne({ where: { id } });
  }

  findOneByEmail(email: string): Promise<CustomerUser> {
    return this.userRepository.findOne({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
