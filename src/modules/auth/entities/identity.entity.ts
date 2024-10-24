import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'identities', schema: 'auth' })
export class Identity {
  @Column({ type: 'text', name: 'provider_id', nullable: false })
  providerId: string;

  @Column({ type: 'uuid', name: 'user_id', nullable: false })
  userId: string;

  @Column({ type: 'jsonb', name: 'identity_data', nullable: false })
  identityData: object;

  @Column({ type: 'text', name: 'provider', nullable: false })
  provider: string;

  @Column({ type: 'timestamptz', name: 'last_sign_in_at', nullable: true })
  lastSignInAt: Date;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column({
    type: 'text',
    name: 'email',
    generatedType: 'STORED',
    asExpression: `lower((identity_data ->> 'email'))`,
    nullable: true,
    comment: 'Auth: Email is a generated column that references the optional email property in the identity_data',
  })
  email: string;

  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;
}
