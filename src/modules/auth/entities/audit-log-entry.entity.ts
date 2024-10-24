import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'audit_log_entries', schema: 'auth' })
export class AuditLogEntry {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'uuid', name: 'instance_id', nullable: true })
  instanceId: string;

  @Column({ type: 'json', name: 'payload', nullable: true })
  payload: object;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', nullable: true })
  createdAt: Date;

  @Column({
    type: 'varchar',
    length: 64,
    name: 'ip_address',
    default: '',
    nullable: false,
  })
  ipAddress: string;
}
