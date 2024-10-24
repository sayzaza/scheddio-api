import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'sso_domains', schema: 'auth' })
export class SsoDomain {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'uuid', name: 'sso_provider_id', nullable: false })
  ssoProviderId: string;

  @Column({ type: 'text', name: 'domain', nullable: false })
  domain: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', nullable: true })
  updatedAt: Date;
}