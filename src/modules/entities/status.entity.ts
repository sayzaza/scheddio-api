import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Order } from './order.entity';

@Entity({ name: 'status_table', schema: 'public' })
export class Status {
  @PrimaryColumn({ type: 'bigint', name: 'STATUS_ID' })
  statusId: number;

  @Column({ type: 'text', name: 'STATUS', nullable: true })
  status: string;

  @OneToMany(() => Order, order => order.orderStatus)
  orders: Order[];
}
