import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'actions_table', schema: 'public' })
export class Action {
  @PrimaryColumn({ type: 'bigint', name: 'ACTION_ID' })
  actionId: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'ACTION_DATE', default: () => 'now()', nullable: false })
  actionDate: Date;

  @Column({ type: 'bigint', name: 'ORDER_ID', nullable: true })
  orderId: number;

  @Column({ type: 'uuid', name: 'PERFORMED_BY', nullable: true })
  performedBy: string;

  @Column({ type: 'varchar', name: 'ACTION', nullable: true })
  action: string;
}
