import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'client_actions_table', schema: 'public' })
export class ClientAction {
  @PrimaryColumn({ type: 'bigint', name: 'ACTION_ID' })
  actionId: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'ACTION_DATE', default: () => 'now()', nullable: false })
  actionDate: Date;

  @Column({ type: 'bigint', name: 'CLIENT_ID', nullable: false })
  clientId: number;

  @Column({ type: 'uuid', name: 'PERFORMED_BY', nullable: true })
  performedBy: string;

  @Column({ type: 'varchar', name: 'ACTION', nullable: true })
  action: string;
}
