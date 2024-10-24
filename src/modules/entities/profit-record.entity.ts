import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'profit_record_table', schema: 'public' })
export class ProfitRecord {
  @PrimaryColumn({ type: 'bigint', name: 'PROFIT_RECORD_ID' })
  profitRecordId: number;

  @Column({ type: 'timestamptz', name: 'PROFIT_RECORD_START_TIME', nullable: true })
  profitRecordStartTime: Date;

  @Column({ type: 'timestamptz', name: 'PROFIT_RECORD_END_TIME', nullable: true })
  profitRecordEndTime: Date;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_TOTAL_HOURS', nullable: true })
  profitRecordTotalHours: number;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_DAILY_COST', nullable: true })
  profitRecordDailyCost: number;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_APT1', nullable: true })
  profitRecordApt1: number;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_APT2', nullable: true })
  profitRecordApt2: number;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_APT3', nullable: true })
  profitRecordApt3: number;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_APT4', nullable: true })
  profitRecordApt4: number;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_APT5', nullable: true })
  profitRecordApt5: number;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_APT6', nullable: true })
  profitRecordApt6: number;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_APT7', nullable: true })
  profitRecordApt7: number;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_TOTAL', nullable: true })
  profitRecordTotal: number;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_PROFIT_MARGIN', nullable: true })
  profitRecordProfitMargin: number;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_WEEKLY_SALES', nullable: true })
  profitRecordWeeklySales: number;

  @Column({ type: 'double precision', name: 'PROFIT_RECORD_WEEKLY_COST', nullable: true })
  profitRecordWeeklyCost: number;

  @Column({ type: 'bigint', name: 'PROFIT_RECORD_TEAM_MEMBER_ID', nullable: true })
  profitRecordTeamMemberId: number;

  @Column({ type: 'date', name: 'PROFIT_RECORD_DATE', nullable: false })
  profitRecordDate: string;
}
