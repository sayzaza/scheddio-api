import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JWT_SECRET } from '../../shared/constants';
import { SystemUser } from './entities/system-user.entity';
import { UsersModule } from '../users/users.module';
import { ServicesModule } from '../../services/services.module';
import { LocalJwtService } from './local-jwt.service';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([SystemUser]),
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: '1d', // TODO: should be reconsidered later on
      }
    }),
    forwardRef(() => UsersModule),
    ServicesModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalJwtService, AuthGuard],
  exports: [AuthService, LocalJwtService, AuthGuard],
})
export class AuthModule {}
