import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'order_fulfillment_status_table', schema: 'public' })
export class OrderFulfillmentStatus {
  @PrimaryColumn({ type: 'bigint', name: 'ORDER_FULFILLMENT_STATUS_ID' })
  orderFulfillmentStatusId: number;

  @Column({ type: 'text', name: 'STATUS', nullable: false })
  status: string;
}
