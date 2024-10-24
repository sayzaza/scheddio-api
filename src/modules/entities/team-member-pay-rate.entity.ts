import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'team_member_pay_rate_table', schema: 'public' })
export class TeamMemberPayRate {
  @PrimaryColumn({ type: 'bigint', name: 'PAY_RATE_ID' })
  payRateId: number;

  @Column({ type: 'bigint', name: 'TEAMMEMBER_ID', nullable: false })
  teamMemberId: number;

  @Column({ type: 'text', name: 'STATUS', nullable: false })
  status: string;

  @Column({ type: 'text', name: 'PAY_PERIOD', nullable: false })
  payPeriod: string;

  @Column({ type: 'double precision', name: 'RATE', nullable: false })
  rate: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'START_DATE', default: () => 'now()', nullable: false })
  startDate: Date;
}
