import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from '../entities/order.entity';
import { ServicesModule } from '../../services/services.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    ServicesModule,
    AuthModule,
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
