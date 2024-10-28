import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from './order.entity';
import { Employee } from '../users/entities/employee.entity';

@Entity({ name: 'actions_table', schema: 'public' })
export class Action {
  @PrimaryColumn({ type: 'bigint', name: 'ACTION_ID' })
  actionId: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'ACTION_DATE', default: () => 'now()', nullable: false })
  actionDate: Date;

  @ManyToOne(() => Order, order => order.actions)
  @JoinColumn({ name: 'ORDER_ID', foreignKeyConstraintName: 'public_actions_table_ORDER_ID_fkey' })
  order: Order;

  @ManyToOne(() => Employee, employee => employee.actions)
  @JoinColumn({  name: 'PERFORMED_BY', foreignKeyConstraintName: 'public_actions_table_PERFORMED_BY_fkey' })
  performedBy: Employee;

  @Column({ type: 'varchar', name: 'ACTION', nullable: true })
  action: string;
}
