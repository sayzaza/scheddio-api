import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'saml_relay_states', schema: 'auth' })
export class SamlRelayState {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'uuid', name: 'sso_provider_id', nullable: false })
  ssoProviderId: string;

  @Column({ type: 'text', name: 'request_id', nullable: false })
  requestId: string;

  @Column({ type: 'text', name: 'for_email', nullable: true })
  forEmail: string;

  @Column({ type: 'text', name: 'redirect_to', nullable: true })
  redirectTo: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column({ type: 'uuid', name: 'flow_state_id', nullable: true })
  flowStateId: string;
}