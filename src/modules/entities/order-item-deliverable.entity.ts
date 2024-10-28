import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { OrderFulfillmentStatus } from './order-fulfillment-status.entity';
import { OrderItem } from './order-item.entity';
import { TeamMember } from './team-member.entity';

@Entity({ name: 'order_item_deliverables', schema: 'public' })
export class OrderItemDeliverable {
  @PrimaryColumn({ type: 'bigint', name: 'deliverable_id' })
  deliverableId: number;

  @ManyToOne(() => OrderItem, orderItem => orderItem.orderItemDeliverables)
  @JoinColumn({ name: 'orderitems_id', foreignKeyConstraintName: 'order_item_deliverables_orderitems_id_fkey' })
  orderItem: OrderItem;

  @Column({ type: 'text', name: 'product_deliverable', nullable: false })
  productDeliverable: string;

  @ManyToOne(() => OrderFulfillmentStatus, status => status.orderItemDeliverables)
  @JoinColumn({ name: 'fulfillment_status', foreignKeyConstraintName: 'order_item_deliverables_fulfillment_status_fkey' })
  fulfillmentStatus: OrderFulfillmentStatus;

  @Column({ type: 'text', name: 'reference_number', nullable: false })
  referenceNumber: string;

  @Column({ type: 'bigint', name: 'ordertable_id', nullable: true })
  orderTableId: number;

  @ManyToOne(() => TeamMember, (teamMember) => teamMember.orderItemDeliverables)
  @JoinColumn({ name: 'teammember_id', foreignKeyConstraintName: 'order_item_deliverables_teammember_id_fkey' })
  teamMember: TeamMember;
}
