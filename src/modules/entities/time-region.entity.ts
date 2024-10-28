import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TeamMember } from './team-member.entity';
import { TimeRegionRecursion } from './time-region-recursion.entity';

@Entity({ name: 'time_region_table', schema: 'public' })
export class TimeRegion {
  @PrimaryColumn({ type: 'bigint', name: 'TIME_REGION_ID' })
  timeRegionId: number;

  @Column({ type: 'timestamp without time zone', name: 'TIME_REGION_START_TIME', nullable: true })
  timeRegionStartTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'TIME_REGION_END_TIME', nullable: true })
  timeRegionEndTime: Date;

  @ManyToOne(() => TeamMember, teamMember => teamMember.timeRegions)
  @JoinColumn({ name: 'TEAM_MEMBER_ID', foreignKeyConstraintName: 'time_region_table_TEAM_MEMBER_ID_fkey' })
  teamMember: TeamMember;

  @Column({ type: 'text', name: 'TIME_REGION_EVENT_ID', nullable: true })
  timeRegionEventId: string;

  @ManyToOne(() => TimeRegionRecursion, recursion => recursion.timeRegions)
  @JoinColumn({ name: 'RECURSION_ID', foreignKeyConstraintName: 'time_region_table_RECURSION_ID_fkey' })
  recursion: TimeRegionRecursion;
}
