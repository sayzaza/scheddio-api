import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'order_payment_status_table', schema: 'public' })
export class OrderPaymentStatus {
  @PrimaryColumn({ type: 'bigint', name: 'ORDER_PAYMENT_STATUS_ID' })
  orderPaymentStatusId: number;

  @Column({ type: 'text', name: 'STATUS', nullable: false })
  status: string;
}
