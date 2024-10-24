import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'one_time_tokens', schema: 'auth' })
export class OneTimeToken {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'uuid', name: 'user_id', nullable: false })
  userId: string;

  @Column({ type: 'enum', enum: ['login', 'password_reset'], name: 'token_type', nullable: false })
  tokenType: string;

  @Column({ type: 'text', name: 'token_hash', nullable: false })
  tokenHash: string;

  @Column({ type: 'text', name: 'relates_to', nullable: false })
  relatesTo: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', default: () => 'now()', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', default: () => 'now()', nullable: false })
  updatedAt: Date;
}
