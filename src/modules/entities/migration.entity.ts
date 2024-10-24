import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'migrations', schema: 'storage' })
export class StorageMigration {
  @PrimaryColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 100, name: 'name', nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 40, name: 'hash', nullable: false })
  hash: string;

  @CreateDateColumn({ type: 'timestamp without time zone', name: 'executed_at', default: () => 'CURRENT_TIMESTAMP', nullable: true })
  executedAt: Date;
}
