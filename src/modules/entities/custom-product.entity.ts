import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from '../users/entities/employee.entity';

@Entity({ name: 'custom_product_table', schema: 'public' })
export class CustomProduct {
  @PrimaryColumn({ type: 'bigint', name: 'CUSTOM_PRODUCT_ID' })
  customProductId: number;

  @Column({ type: 'text', name: 'CUSTOM_PRODUCT_NAME', nullable: false })
  customProductName: string;

  @ManyToOne(() => Employee, employee => employee.customProducts)
  @JoinColumn({ name: 'CREATED_BY', foreignKeyConstraintName: 'public_custom_product_table_CREATED_BY_fkey' })
  createdBy: Employee;

  @Column({ type: 'text', name: 'CUSTOM_PRODUCT_DESCRIPTION', nullable: false })
  customProductDescription: string;

  @Column({ type: 'double precision', name: 'CUSTOM_PRODUCT_PRICE', nullable: false })
  customProductPrice: number;

  @Column({ type: 'bigint', name: 'CUSTOM_PRODUCT_TIME_DURATION', nullable: false })
  customProductTimeDuration: number;
}
