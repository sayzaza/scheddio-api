import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Order } from './order.entity';
import { OrderItemDeliverable } from './order-item-deliverable.entity';

@Entity({ name: 'order_fulfillment_status_table', schema: 'public' })
export class OrderFulfillmentStatus {
  @PrimaryColumn({ type: 'bigint', name: 'ORDER_FULFILLMENT_STATUS_ID' })
  orderFulfillmentStatusId: number;

  @Column({ type: 'text', name: 'STATUS', nullable: false })
  status: string;

  @OneToMany(() => Order, order => order.orderFulfillmentStatus)
  orders: Order[];

  @OneToMany(() => OrderItemDeliverable, (entity) => entity.orderItem)
  orderItemDeliverables: OrderItemDeliverable[];
}
