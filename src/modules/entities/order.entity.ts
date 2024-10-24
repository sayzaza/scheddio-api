import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'order_table', schema: 'public' })
export class Order {
  @PrimaryColumn({ type: 'bigint', name: 'ORDERTABLE_ID' })
  orderId: number;

  @Column({ type: 'text', name: 'ORDER_ADDRESS', nullable: true })
  orderAddress: string;

  @Column({ type: 'text', name: 'ORDER_GATE_INFO', nullable: true })
  orderGateInfo: string;

  @Column({ type: 'text', name: 'ORDER_ASSISTANCE_INFO', nullable: true })
  orderAssistanceInfo: string;

  @Column({ type: 'bigint', name: 'CLIENT_ID', nullable: false })
  clientId: number;

  @Column({ type: 'bigint', name: 'TEAMMEMBER_ID', nullable: false })
  teamMemberId: number;

  @Column({ type: 'date', name: 'ORDER_CREATED_DATE', nullable: true })
  orderCreatedDate: Date;

  @Column({ type: 'bigint', name: 'ORDER_STATUS_ID', nullable: true })
  orderStatusId: number;

  @Column({ type: 'text', name: 'ORDER_PAYMENT_NOTES', nullable: true })
  orderPaymentNotes: string;

  @Column({ type: 'timestamptz', name: 'ORDER_FULFILLMENT_DATE', nullable: true })
  orderFulfillmentDate: Date;

  @Column({ type: 'numeric', name: 'ORDER_SUBTOTAL', nullable: true })
  orderSubtotal: number;

  @Column({ type: 'numeric', name: 'ORDER_TAX', nullable: true })
  orderTax: number;

  @Column({ type: 'numeric', name: 'ORDER_TOTAL', nullable: true })
  orderTotal: number;

  @Column({ type: 'numeric', name: 'ORDER_PAYMENTS', nullable: true })
  orderPayments: number;

  @Column({ type: 'numeric', name: 'ORDER_TIPS', nullable: true })
  orderTips: number;

  @Column({ type: 'numeric', name: 'ORDER_BALANCE', nullable: true })
  orderBalance: number;

  @Column({ type: 'text', name: 'ORDER_COUPONS_PROMO_CODES', nullable: true })
  orderCouponsPromoCodes: string;

  @Column({ type: 'text', name: 'ORDER_FORM_NAME', nullable: true })
  orderFormName: string;

  @Column({ type: 'text', name: 'EVENT_ID', nullable: true, comment: 'event-Id corresponding to the event-Id attached to google calendarevent.' })
  eventId: string;

  @Column({ type: 'text', name: 'CREATED_BY', default: 'SYSTEM', nullable: true })
  createdBy: string;

  @Column({ type: 'text', name: 'MODIFIED_BY', nullable: true })
  modifiedBy: string;

  @Column({ type: 'bigint', name: 'PROPERTY_SIZE', nullable: true })
  propertySize: number;

  @Column({ type: 'text', name: 'ORDER_ACTION_STATUS', default: 'ACTIVE', nullable: false })
  orderActionStatus: string;

  @Column({ type: 'bigint', name: 'ORDER_PAYMENT_STATUS_ID', default: 1, nullable: false })
  orderPaymentStatusId: number;

  @Column({ type: 'bigint', name: 'ORDER_FULFILLMENT_STATUS_ID', default: 1, nullable: false })
  orderFulfillmentStatusId: number;

  @Column({ type: 'bigint', name: 'ORDER_INVOICE_ID', nullable: true })
  orderInvoiceId: number;
}
