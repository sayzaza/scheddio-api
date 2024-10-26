import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Employee } from '../users/entities/employee.entity';

@Entity({ name: 'client_actions_table', schema: 'public' })
export class ClientAction {
  @PrimaryColumn({ type: 'bigint', name: 'ACTION_ID' })
  actionId: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'ACTION_DATE', default: () => 'now()', nullable: false })
  actionDate: Date;

  @ManyToOne(() => User, user => user.clientActions)
  @JoinColumn({ name: 'CLIENT_ID', foreignKeyConstraintName: 'client_actions_table_CLIENT_ID_fkey' })
  client: User;

  @ManyToOne(() => Employee, employee => employee.clientActions)
  @JoinColumn({ name: 'PERFORMED_BY', foreignKeyConstraintName: 'client_actions_table_PERFORMED_BY_fkey' })
  performedBy: string;

  @Column({ type: 'varchar', name: 'ACTION', nullable: true })
  action: string;
}
