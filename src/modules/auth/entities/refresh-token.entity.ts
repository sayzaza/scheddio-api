import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'refresh_tokens', schema: 'auth' })
export class RefreshToken {
  @Column({ type: 'uuid', name: 'instance_id', nullable: true })
  instanceId: string;

  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'token', nullable: true })
  token: string;

  @Column({ type: 'varchar', length: 255, name: 'user_id', nullable: true })
  userId: string;

  @Column({ type: 'boolean', name: 'revoked', nullable: true })
  revoked: boolean;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 255, name: 'parent', nullable: true })
  parent: string;

  @Column({ type: 'uuid', name: 'session_id', nullable: true })
  sessionId: string;
}
