import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'product_variant_table', schema: 'public' })
export class ProductVariant {
  @PrimaryColumn({ type: 'bigint', name: 'PRODUCT_VARIANT_ID' })
  productVariantId: number;

  @Column({ type: 'bigint', name: 'PRODUCT_VARIANT_CODE', nullable: true })
  productVariantCode: number;

  @Column({ type: 'text', name: 'PRODUCT_VARIANT', nullable: true })
  productVariant: string;

  @Column({ type: 'double precision', name: 'PRODUCT_VARIANT_PRICE', nullable: true })
  productVariantPrice: number;

  @Column({ type: 'bigint', name: 'PRODUCT_VARIANT_DURATION', nullable: true })
  productVariantDuration: number;

  @Column({ type: 'double precision', name: 'DISCOUNT_PRICE', nullable: true })
  discountPrice: number;

  @Column({ type: 'bigint', name: 'MIN_PROPERTY_SIZE', nullable: true })
  minPropertySize: number;

  @Column({ type: 'bigint', name: 'MAX_PROPERTY_SIZE', nullable: true })
  maxPropertySize: number;

  @Column({ type: 'text', array: true, name: 'PRODUCT_DELIVERABLES', nullable: false })
  productDeliverables: string[];

  @Column({ type: 'text', array: true, name: 'PRODUCT_DELIVERABLES_REFERENCE', nullable: true })
  productDeliverablesReference: string[];
}
