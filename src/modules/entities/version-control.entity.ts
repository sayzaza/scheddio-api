import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'version_control', schema: 'public' })
export class VersionControl {
  @PrimaryColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'current_version', nullable: false })
  currentVersion: string;

  @Column({ type: 'bigint', name: 'build_number', nullable: true })
  buildNumber: number;

  @Column({ type: 'varchar', name: 'env', default: 'dev', nullable: false })
  env: string;
}
