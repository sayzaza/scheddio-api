import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'mfa_amr_claims', schema: 'auth' })
export class MfaAmrClaim {
  @Column({ type: 'uuid', name: 'session_id', nullable: false })
  sessionId: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', nullable: false })
  updatedAt: Date;

  @Column({ type: 'text', name: 'authentication_method', nullable: false })
  authenticationMethod: string;

  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;
}
