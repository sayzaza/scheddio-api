import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'sessions', schema: 'auth' })
export class Session {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'uuid', name: 'user_id', nullable: false })
  userId: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column({ type: 'uuid', name: 'factor_id', nullable: true })
  factorId: string;

  @Column({ type: 'enum', enum: ['low', 'medium', 'high'], name: 'aal', nullable: true })
  aal: string;

  @Column({ type: 'timestamptz', name: 'not_after', nullable: true, comment: 'Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired.' })
  notAfter: Date;

  @Column({ type: 'timestamp', name: 'refreshed_at', nullable: true })
  refreshedAt: Date;

  @Column({ type: 'text', name: 'user_agent', nullable: true })
  userAgent: string;

  @Column({ type: 'inet', name: 'ip', nullable: true })
  ip: string;

  @Column({ type: 'text', name: 'tag', nullable: true })
  tag: string;
}