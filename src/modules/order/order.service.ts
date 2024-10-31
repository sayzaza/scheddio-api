import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {}

  async createOrder(payload: any) {
    const order = this.orderFromPayload(payload);
    return this.ordersRepository.save(order);
  }

  async removeOrder(id: string) {
    // TODO: remove order
  }

  private orderFromPayload(payload: any) {
    const order = new Order();
    // TODO: fill in order values using payload
    return order;
  }
}
