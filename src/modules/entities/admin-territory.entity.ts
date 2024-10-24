import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'admin_territory_table', schema: 'public' })
export class AdminTerritory {
  @PrimaryColumn({ type: 'integer', name: 'ID' })
  id: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'CREATED_AT', default: () => 'CURRENT_TIMESTAMP', nullable: true })
  createdAt: Date;

  @Column({ type: 'integer', name: 'TERRITORY_ID', nullable: false })
  territoryId: number;

  @Column({ type: 'double precision', name: 'LATITUDE', nullable: false })
  latitude: number;

  @Column({ type: 'double precision', name: 'LONGITUDE', nullable: false })
  longitude: number;
}
