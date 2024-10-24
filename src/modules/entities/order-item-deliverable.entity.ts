import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'order_item_deliverables', schema: 'public' })
export class OrderItemDeliverable {
  @PrimaryColumn({ type: 'bigint', name: 'deliverable_id' })
  deliverableId: number;

  @Column({ type: 'bigint', name: 'orderitems_id', nullable: false })
  orderItemsId: number;

  @Column({ type: 'text', name: 'product_deliverable', nullable: false })
  productDeliverable: string;

  @Column({ type: 'bigint', name: 'fulfillment_status', default: 1, nullable: false })
  fulfillmentStatus: number;

  @Column({ type: 'text', name: 'reference_number', nullable: false })
  referenceNumber: string;

  @Column({ type: 'bigint', name: 'ordertable_id', nullable: true })
  orderTableId: number;

  @Column({ type: 'bigint', name: 'teammember_id', nullable: false })
  teamMemberId: number;
}
