import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'subscription', schema: 'realtime' })
export class RealtimeSubscription {
  @PrimaryColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column({ type: 'uuid', name: 'subscription_id', nullable: false })
  subscriptionId: string;

  @Column({ type: 'text', name: 'entity', nullable: false })
  entity: string;

  @Column({ type: 'text', array: true, name: 'filters', default: () => "'{}'", nullable: false })
  filters: any[];

  @Column({ type: 'jsonb', name: 'claims', nullable: false })
  claims: object;

  @Column({ type: 'text', name: 'claims_role', nullable: false, generatedType: 'STORED' })
  claimsRole: string;

  @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at', default: () => "timezone('utc'::text, now())", nullable: false })
  createdAt: Date;
}
