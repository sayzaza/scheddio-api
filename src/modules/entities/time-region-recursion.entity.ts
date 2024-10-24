import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'time_region_recursion_table', schema: 'public' })
export class TimeRegionRecursion {
  @PrimaryColumn({ type: 'bigint', name: 'RECURSION_ID' })
  recursionId: number;

  @Column({ type: 'text', name: 'RECURSION_NAME', nullable: false })
  recursionName: string;
}
