import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Status } from './status.entity';
import { Appointment } from './appointment.entity';
import { OrderFulfillmentStatus } from './order-fulfillment-status.entity';
import { OrderPaymentStatus } from './order-payment-status.entity';
import { TeamMember } from './team-member.entity';
import { OrderItem } from './order-item.entity';
import { Action } from './action.entity';

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

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'CLIENT_ID', foreignKeyConstraintName: 'order_table_CLIENT_ID_fkey' })
  client: User;

  @ManyToOne(() => TeamMember, (teamMember) => teamMember.orders)
  @JoinColumn({ name: 'TEAMMEMBER_ID', foreignKeyConstraintName: 'order_table_TEAMMEMBER_ID_fkey' })
  teamMember: TeamMember;

  @Column({ type: 'date', name: 'ORDER_CREATED_DATE', nullable: true })
  orderCreatedDate: Date;

  @ManyToOne(() => Status, (status) => status.orders, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ORDER_STATUS_ID', foreignKeyConstraintName: 'order_table_ORDER_STATUS_ID_fkey' })
  orderStatus: Status;

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

  @ManyToOne(() => OrderPaymentStatus, (entity) => entity.orders)
  @JoinColumn({ name: 'ORDER_PAYMENT_STATUS_ID', foreignKeyConstraintName: 'public_order_table_ORDER_PAYMENT_STATUS_ID_fkey' })
  orderPaymentStatus: OrderPaymentStatus;

  @ManyToOne(() => OrderFulfillmentStatus, (entity) => entity.orders)
  @JoinColumn({ name: 'ORDER_FULFILLMENT_STATUS_ID', foreignKeyConstraintName: 'public_order_table_ORDER_FULFILLMENT_STATUS_ID_fkey' })
  orderFulfillmentStatus: OrderFulfillmentStatus;

  @Column({ type: 'bigint', name: 'ORDER_INVOICE_ID', nullable: true })
  orderInvoiceId: number;

  @OneToMany(() => Appointment, appointment => appointment.order)
  appointments: Appointment[];

  @OneToMany(() => OrderItem, orderItem => orderItem.order)
  orderItems: OrderItem[];

  @OneToMany(() => Action, action => action.order)
  actions: Action[];
}
