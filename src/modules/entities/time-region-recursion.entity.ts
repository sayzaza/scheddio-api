import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { TimeRegion } from './time-region.entity';

@Entity({ name: 'time_region_recursion_table', schema: 'public' })
export class TimeRegionRecursion {
  @PrimaryColumn({ type: 'bigint', name: 'RECURSION_ID' })
  recursionId: number;

  @Column({ type: 'text', name: 'RECURSION_NAME', nullable: false })
  recursionName: string;

  @OneToMany(() => TimeRegion, (timeRegion) => timeRegion.recursion)
  timeRegions: TimeRegion[];
}
