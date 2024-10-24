import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users', schema: 'auth' })
export class User {
  @PrimaryColumn({ type: 'uuid', name: 'id' })
  id: string;

  @Column({ type: 'uuid', name: 'instance_id', nullable: true })
  instanceId: string;

  @Column({ type: 'varchar', length: 255, name: 'aud', nullable: true })
  aud: string;

  @Column({ type: 'varchar', length: 255, name: 'role', nullable: true })
  role: string;

  @Column({ type: 'varchar', length: 255, name: 'email', nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 255, name: 'encrypted_password', nullable: true })
  encryptedPassword: string;

  @Column({ type: 'timestamptz', name: 'email_confirmed_at', nullable: true })
  emailConfirmedAt: Date;

  @Column({ type: 'timestamptz', name: 'invited_at', nullable: true })
  invitedAt: Date;

  @Column({ type: 'varchar', length: 255, name: 'confirmation_token', nullable: true })
  confirmationToken: string;

  @Column({ type: 'timestamptz', name: 'confirmation_sent_at', nullable: true })
  confirmationSentAt: Date;

  @Column({ type: 'varchar', length: 255, name: 'recovery_token', nullable: true })
  recoveryToken: string;

  @Column({ type: 'timestamptz', name: 'recovery_sent_at', nullable: true })
  recoverySentAt: Date;

  @Column({ type: 'varchar', length: 255, name: 'email_change_token_new', nullable: true })
  emailChangeTokenNew: string;

  @Column({ type: 'varchar', length: 255, name: 'email_change', nullable: true })
  emailChange: string;

  @Column({ type: 'timestamptz', name: 'email_change_sent_at', nullable: true })
  emailChangeSentAt: Date;

  @Column({ type: 'timestamptz', name: 'last_sign_in_at', nullable: true })
  lastSignInAt: Date;

  @Column({ type: 'jsonb', name: 'raw_app_meta_data', nullable: true })
  rawAppMetaData: object;

  @Column({ type: 'jsonb', name: 'raw_user_meta_data', nullable: true })
  rawUserMetaData: object;

  @Column({ type: 'boolean', name: 'is_super_admin', nullable: true })
  isSuperAdmin: boolean;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column({ type: 'text', name: 'phone', nullable: true })
  phone: string;

  @Column({ type: 'timestamptz', name: 'phone_confirmed_at', nullable: true })
  phoneConfirmedAt: Date;

  @Column({ type: 'text', name: 'phone_change', default: '', nullable: true })
  phoneChange: string;

  @Column({ type: 'varchar', length: 255, name: 'phone_change_token', default: '', nullable: true })
  phoneChangeToken: string;

  @Column({ type: 'timestamptz', name: 'phone_change_sent_at', nullable: true })
  phoneChangeSentAt: Date;

  // Generated Column
  @Column({ type: 'timestamptz', name: 'confirmed_at', generatedType: 'STORED', asExpression: 'LEAST(email_confirmed_at, phone_confirmed_at)', nullable: true })
  confirmedAt: Date;

  @Column({ type: 'varchar', length: 255, name: 'email_change_token_current', default: '', nullable: true })
  emailChangeTokenCurrent: string;

  @Column({ type: 'smallint', name: 'email_change_confirm_status', default: 0, nullable: true })
  emailChangeConfirmStatus: number;

  @Column({ type: 'timestamptz', name: 'banned_until', nullable: true })
  bannedUntil: Date;

  @Column({ type: 'varchar', length: 255, name: 'reauthentication_token', default: '', nullable: true })
  reauthenticationToken: string;

  @Column({ type: 'timestamptz', name: 'reauthentication_sent_at', nullable: true })
  reauthenticationSentAt: Date;

  @Column({ type: 'boolean', name: 'is_sso_user', default: false, comment: 'Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails.' })
  isSsoUser: boolean;

  @Column({ type: 'timestamptz', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @Column({ type: 'boolean', name: 'is_anonymous', default: false })
  isAnonymous: boolean;
}
