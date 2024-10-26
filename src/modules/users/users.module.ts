import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Group } from './entities/group.entity';
import { GroupUserMapping } from './entities/group-user-mapping.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Group, GroupUserMapping]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
