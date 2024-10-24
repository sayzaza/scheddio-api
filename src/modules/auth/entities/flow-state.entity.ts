import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'flow_state', schema: 'auth' })
export class FlowState {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'uuid', name: 'user_id', nullable: true })
  userId: string;

  @Column({ type: 'text', name: 'auth_code', nullable: false })
  authCode: string;

  @Column({ type: 'enum', name: 'code_challenge_method', enum: ['plain', 'S256'], nullable: false })
  codeChallengeMethod: 'plain' | 'S256';

  @Column({ type: 'text', name: 'code_challenge', nullable: false })
  codeChallenge: string;

  @Column({ type: 'text', name: 'provider_type', nullable: false })
  providerType: string;

  @Column({ type: 'text', name: 'provider_access_token', nullable: true })
  providerAccessToken: string;

  @Column({ type: 'text', name: 'provider_refresh_token', nullable: true })
  providerRefreshToken: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column({ type: 'text', name: 'authentication_method', nullable: false })
  authenticationMethod: string;

  @Column({ type: 'timestamptz', name: 'auth_code_issued_at', nullable: true })
  authCodeIssuedAt: Date;
}
