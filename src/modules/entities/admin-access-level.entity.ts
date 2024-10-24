import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'admin_access_level_table', schema: 'public' })
export class AdminAccessLevel {
  @PrimaryColumn({ type: 'bigint', name: 'ACCESS_LEVEL_ID' })
  accessLevelId: number;

  @Column({ type: 'text', name: 'ACCESS_LEVEL', nullable: true })
  accessLevel: string;
}
