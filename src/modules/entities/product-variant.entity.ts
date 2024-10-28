import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'product_variant_table', schema: 'public' })
export class ProductVariant {
  @PrimaryColumn({ type: 'bigint', name: 'PRODUCT_VARIANT_ID' })
  productVariantId: number;

  @ManyToOne(() => Product, product => product.productVariants)
  @JoinColumn({ name: 'PRODUCT_VARIANT_CODE', foreignKeyConstraintName: 'product_variant_table_PRODUCT_VARIANT_CODE_fkey' })
  product: Product;

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
