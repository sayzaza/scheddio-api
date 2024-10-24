import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'cart_table', schema: 'public' })
export class Cart {
  @PrimaryColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column({ type: 'text', name: 'CART_PRODUCT_VARIANT_CODE', nullable: true })
  cartProductVariantCode: string;

  @Column({ type: 'double precision', name: 'CART_PRODUCT_VARIANT_PRICE', nullable: true })
  cartProductVariantPrice: number;

  @Column({ type: 'bigint', name: 'CART_PRODUCT_VARIANT_ID', nullable: true })
  cartProductVariantId: number;

  @Column({ type: 'bigint', name: 'CART_PRODUCT_CLIENT_ID', nullable: true })
  cartProductClientId: number;

  @Column({ type: 'boolean', name: 'TOP_CLIENT', nullable: true })
  topClient: boolean;

  @Column({ type: 'double precision', name: 'DISCOUNT_PRICE', nullable: true })
  discountPrice: number;

  @Column({ type: 'bigint', name: 'TIME_DURATION', nullable: true })
  timeDuration: number;

  @Column({ type: 'boolean', name: 'IS_CUSTOM', default: false, nullable: false })
  isCustom: boolean;
}
