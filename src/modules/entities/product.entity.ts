import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'product_table', schema: 'public' })
export class Product {
  @PrimaryColumn({ type: 'bigint', name: 'PRODUCT_ID' })
  productId: number;

  @Column({ type: 'text', name: 'PRODUCT_NAME', nullable: true })
  productName: string;

  @Column({ type: 'text', name: 'PRODUCT_TYPE', nullable: true })
  productType: string;

  @Column({ type: 'text', name: 'PRODUCT_DESCRIPTION', nullable: true })
  productDescription: string;

  @Column({ type: 'text', name: 'PRODUCT_VARIANT', nullable: true })
  productVariant: string;

  @Column({ type: 'text', name: 'PRODUCT_IMAGE', nullable: true })
  productImage: string;

  @Column({ type: 'boolean', name: 'IS_ENABLED', default: true, nullable: false })
  isEnabled: boolean;

  @Column({ type: 'bigint', array: true, name: 'PRODUCT_TEAM_MEMBERS', default: () => "'{1,2,3,4}'", nullable: false })
  productTeamMembers: number[];
}
