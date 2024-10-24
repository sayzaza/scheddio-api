import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'schema_migrations', schema: 'realtime' })
export class SchemaMigration {
  @PrimaryColumn({ type: 'bigint', name: 'version' })
  version: number;

  @CreateDateColumn({ type: 'timestamp without time zone', name: 'inserted_at', nullable: true })
  insertedAt: Date;
}
