import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'time_region_table', schema: 'public' })
export class TimeRegion {
  @PrimaryColumn({ type: 'bigint', name: 'TIME_REGION_ID' })
  timeRegionId: number;

  @Column({ type: 'timestamp without time zone', name: 'TIME_REGION_START_TIME', nullable: true })
  timeRegionStartTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'TIME_REGION_END_TIME', nullable: true })
  timeRegionEndTime: Date;

  @Column({ type: 'bigint', name: 'TEAM_MEMBER_ID', nullable: true })
  teamMemberId: number;

  @Column({ type: 'text', name: 'TIME_REGION_EVENT_ID', nullable: true })
  timeRegionEventId: string;

  @Column({ type: 'bigint', name: 'RECURSION_ID', default: 1, nullable: false })
  recursionId: number;
}
