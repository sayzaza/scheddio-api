import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { InquiryStatus } from './inquiry-status.entity';

@Entity({ name: 'inquiries_table', schema: 'public' })
export class Inquiry {
  @PrimaryColumn({ type: 'bigint', name: 'INQUIRY_ID' })
  inquiryId: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'CREATED_AT', default: () => 'now()', nullable: false })
  createdAt: Date;

  @Column({ type: 'text', name: 'CREATED_BY', nullable: true })
  createdBy: string;

  @Column({ type: 'text', name: 'INQUIRY_ADDRESS', nullable: false })
  inquiryAddress: string;

  @Column({ type: 'text', name: 'INQUIRY_NOTES', nullable: false })
  inquiryNotes: string;

  @Column({ type: 'double precision', name: 'INQUIRY_TOTAL_POTENTIAL_PAYMENT', nullable: false })
  inquiryTotalPotentialPayment: number;

  @Column({ type: 'bigint', name: 'CLIENT_ID', nullable: false })
  clientId: number;

  @Column({ type: 'bigint', array: true, name: 'PRODUCT_VARIANT_ID', nullable: true })
  productVariantId: number[];

  @ManyToOne(() => InquiryStatus, status => status.inquiries)
  @JoinColumn({ name: 'INQUIRY_STATUS', foreignKeyConstraintName: 'public_inquiries_table_INQUIRY_STATUS_ID_fkey' })
  inquiryStatus: InquiryStatus;

  @Column({ type: 'text', name: 'INQUIRY_REASON', default: 'n/a', nullable: true })
  inquiryReason: string;

  @Column({ type: 'bigint', name: 'INQUIRY_STATUS_ID', default: 1, nullable: false })
  inquiryStatusId: number;

  @Column({ type: 'timestamptz', name: 'APPOINTMENT_DATE', nullable: true })
  appointmentDate: Date;

  @Column({ type: 'double precision', name: 'PROPERTY_SIZE', nullable: true })
  propertySize: number;

  @Column({ type: 'text', name: 'ORDER_ASSISTANCE_INFO', nullable: true })
  orderAssistanceInfo: string;

  @Column({ type: 'text', name: 'ORDER_GATE_INFO', nullable: true })
  orderGateInfo: string;

  @Column({ type: 'bigint', name: 'CUSTOMER_REF_ID', nullable: true })
  customerRefId: number;

  @Column({ type: 'text', name: 'INQUIRY_DELETE_RESAON', default: 'NONE', nullable: false })
  inquiryDeleteReason: string;
}
