import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'order_items_table', schema: 'public' })
export class OrderItems {
  @PrimaryColumn({ type: 'bigint', name: 'ORDERITEMS_ID' })
  orderItemsId: number;

  @Column({ type: 'bigint', name: 'ORDERITEMS_ORDER_ID', nullable: true })
  orderItemsOrderId: number;

  @Column({ type: 'text', name: 'ORDER_ITEMS_PRODUCT', nullable: true })
  orderItemsProduct: string;

  @Column({ type: 'text', name: 'ORDER_ITEMS_PRODUCT_VARIANT', nullable: true })
  orderItemsProductVariant: string;

  @Column({ type: 'numeric', name: 'ORDER_ITEMS_PRICE', nullable: true })
  orderItemsPrice: number;

  @Column({ type: 'numeric', name: 'ORDER_ITEMS_QTY', nullable: true })
  orderItemsQty: number;

  @Column({ type: 'numeric', name: 'ORDER_ITEMS_LINE_TOTAL', nullable: true })
  orderItemsLineTotal: number;

  @Column({ type: 'text', name: 'ORDER_ITEMS_PAYMENT_STATUS', nullable: true })
  orderItemsPaymentStatus: string;

  @Column({ type: 'text', name: 'ORDER_ITEMS_FULLMILMENT_STATUS', nullable: true })
  orderItemsFulfillmentStatus: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'ORDER_ITEMS_CREATED_DATE', nullable: true })
  orderItemsCreatedDate: Date;

  @Column({ type: 'numeric', name: 'ORDER_ITEMS_GRAND_TOTAL', nullable: true })
  orderItemsGrandTotal: number;

  @Column({ type: 'numeric', name: 'ORDER_ITEMS_PAYMENT', nullable: true })
  orderItemsPayment: number;

  @Column({ type: 'numeric', name: 'ORDER_ITEMS_PENDING_BALANCE', nullable: true })
  orderItemsPendingBalance: number;

  @Column({ type: 'bigint', name: 'ORDER_ITEM_DURATION', nullable: true })
  orderItemDuration: number;

  @Column({ type: 'boolean', name: 'IS_CUSTOM', default: false, nullable: false })
  isCustom: boolean;

  @Column({ type: 'bigint', name: 'ORDER_ITEMS_PRODUCT_VARIANT_ID', nullable: true })
  orderItemsProductVariantId: number;
}
