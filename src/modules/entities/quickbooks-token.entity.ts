import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'quickbooks_token_table', schema: 'public' })
export class QuickBooksToken {
  @CreateDateColumn({ type: 'timestamptz', name: 'EXPIRY_TIME', default: () => 'now()', nullable: false })
  expiryTime: Date;

  @Column({ type: 'text', name: 'REFRESH_TOKEN', default: '', nullable: true })
  refreshToken: string;

  @Column({ type: 'text', name: 'ACCESS_TOKEN', default: '', nullable: true })
  accessToken: string;

  @PrimaryColumn({ type: 'bigint', name: 'COMPANY_ID', default: 1, nullable: false })
  companyId: number;
}
