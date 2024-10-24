import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'status_table', schema: 'public' })
export class Status {
  @PrimaryColumn({ type: 'bigint', name: 'STATUS_ID' })
  statusId: number;

  @Column({ type: 'text', name: 'STATUS', nullable: true })
  status: string;
}
