import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'custom_product_table', schema: 'public' })
export class CustomProduct {
  @PrimaryColumn({ type: 'bigint', name: 'CUSTOM_PRODUCT_ID' })
  customProductId: number;

  @Column({ type: 'text', name: 'CUSTOM_PRODUCT_NAME', nullable: false })
  customProductName: string;

  @Column({ type: 'uuid', name: 'CREATED_BY', nullable: false })
  createdBy: string;

  @Column({ type: 'text', name: 'CUSTOM_PRODUCT_DESCRIPTION', nullable: false })
  customProductDescription: string;

  @Column({ type: 'double precision', name: 'CUSTOM_PRODUCT_PRICE', nullable: false })
  customProductPrice: number;

  @Column({ type: 'bigint', name: 'CUSTOM_PRODUCT_TIME_DURATION', nullable: false })
  customProductTimeDuration: number;
}
