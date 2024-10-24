import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'mfa_challenges', schema: 'auth' })
export class MfaChallenge {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'uuid', name: 'factor_id', nullable: false })
  factorId: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', nullable: false })
  createdAt: Date;

  @Column({ type: 'timestamptz', name: 'verified_at', nullable: true })
  verifiedAt: Date;

  @Column({ type: 'inet', name: 'ip_address', nullable: false })
  ipAddress: string;

  @Column({ type: 'text', name: 'otp_code', nullable: true })
  otpCode: string;

  @Column({ type: 'jsonb', name: 'web_authn_session_data', nullable: true })
  webAuthnSessionData: object;
}
