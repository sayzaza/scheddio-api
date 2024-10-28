import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Inquiry } from './inquiry.entity';

@Entity({ name: 'inquiry_status_table', schema: 'public' })
export class InquiryStatus {
  @PrimaryColumn({ type: 'bigint', name: 'INQUIRY_STATUS_ID' })
  inquiryStatusId: number;

  @Column({ type: 'text', name: 'STATUS', nullable: false })
  status: string;

  @OneToMany(() => Inquiry, inquiry => inquiry.inquiryStatus)
  inquiries: Inquiry[];
}
