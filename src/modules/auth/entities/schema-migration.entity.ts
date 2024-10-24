import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'schema_migrations', schema: 'auth' })
export class SchemaMigration {
  @PrimaryColumn({ type: 'varchar', length: 255, name: 'version' })
  version: string;
}
