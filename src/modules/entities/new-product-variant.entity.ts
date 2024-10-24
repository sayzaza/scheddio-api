import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'NEW_PRODUCT_VARIANT_TABLE', schema: 'public' })
export class NewProductVariant {
  @Column({ type: 'text', name: 'TYPE', nullable: true })
  type: string;

  @Column({ type: 'text', name: 'PRODUCT NAME', nullable: false })
  productName: string;

  @Column({ type: 'text', name: 'DESCRIPTION', nullable: true })
  description: string;

  @Column({ type: 'text', name: 'PRODUCT VARIANT', nullable: true })
  productVariant: string;

  @Column({ type: 'text', name: 'PRICE', nullable: true })
  price: string;

  @Column({ type: 'text', name: '1.07', nullable: true })
  field107: string;

  @Column({ type: 'text', name: '25', nullable: true })
  field25: string;

  @Column({ type: 'text', name: 'DISCOUNT PRICE', nullable: true })
  discountPrice: string;

  @Column({ type: 'text', name: 'DURATION', nullable: true })
  duration: string;

  @PrimaryColumn({ type: 'bigint', name: 'PRODUCT_VARIANT_ID' })
  productVariantId: number;
}
