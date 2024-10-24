import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'discount_table', schema: 'public' })
export class Discount {
  @PrimaryColumn({ type: 'bigint', name: 'DISCOUNT_ID' })
  discountId: number;

  @Column({ type: 'boolean', name: 'CUSTOMER_DISCOUNT', nullable: true })
  customerDiscount: boolean;
}
