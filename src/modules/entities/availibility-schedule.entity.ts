import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'availibility_schedule_table', schema: 'public' })
export class AvailibilitySchedule {
  @PrimaryColumn({ type: 'bigint', name: 'SCHEDULE_ID' })
  scheduleId: number;

  @Column({ type: 'text', name: 'SCHEDULE_DAY', nullable: true })
  scheduleDay: string;

  @Column({ type: 'time without time zone', name: 'START_TIME', default: () => "'06:00:00'", nullable: false })
  startTime: string;

  @Column({ type: 'time without time zone', name: 'END_TIME', default: () => "'18:00:00'", nullable: false })
  endTime: string;

  @Column({ type: 'boolean', name: 'IS_ENABLED', default: true, nullable: false })
  isEnabled: boolean;
}
