import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'inquiry_status_table', schema: 'public' })
export class InquiryStatus {
  @PrimaryColumn({ type: 'bigint', name: 'INQUIRY_STATUS_ID' })
  inquiryStatusId: number;

  @Column({ type: 'text', name: 'STATUS', nullable: false })
  status: string;
}
