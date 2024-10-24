import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'mfa_factors', schema: 'auth' })
export class MfaFactor {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'uuid', name: 'user_id', nullable: false })
  userId: string;

  @Column({ type: 'text', name: 'friendly_name', nullable: true })
  friendlyName: string;

  @Column({ type: 'enum', enum: ['sms', 'email', 'webauthn'], name: 'factor_type', nullable: false })
  factorType: string;

  @Column({ type: 'enum', enum: ['pending', 'active', 'revoked'], name: 'status', nullable: false })
  status: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', nullable: false })
  updatedAt: Date;

  @Column({ type: 'text', name: 'secret', nullable: true })
  secret: string;

  @Column({ type: 'text', name: 'phone', nullable: true })
  phone: string;

  @Column({ type: 'timestamptz', name: 'last_challenged_at', nullable: true })
  lastChallengedAt: Date;

  @Column({ type: 'jsonb', name: 'web_authn_credential', nullable: true })
  webAuthnCredential: object;

  @Column({ type: 'uuid', name: 'web_authn_aaguid', nullable: true })
  webAuthnAaguid: string;
}
