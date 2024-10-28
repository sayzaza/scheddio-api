import { Entity, PrimaryColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Order } from './order.entity';
import { OrderItemDeliverable } from './order-item-deliverable.entity';
import { ProfitRecord } from './profit-record.entity';
import { TeamMemberPayRate } from './team-member-pay-rate.entity';
import { TimeRegion } from './time-region.entity';

@Entity({ name: 'team_member_table', schema: 'public' })
export class TeamMember {
  @PrimaryColumn({ type: 'bigint', name: 'TEAMMEMBER_ID' })
  teamMemberId: number;

  @Column({ type: 'text', name: 'TEAMMEMBER_NAME', nullable: true })
  teamMemberName: string;

  @Column({ type: 'text', name: 'ACCESS_TYPE', default: 'SERVICE', nullable: true })
  accessType: string;

  @Column({ type: 'text', name: 'TEAMMEMBER_TELEGRAM', default: '@brianguitterez', nullable: false })
  teamMemberTelegram: string;

  @Column({ type: 'text', name: 'TEAMMEMBER_PHONE', nullable: true })
  teamMemberPhone: string;

  @Column({ type: 'double precision', name: 'TEAMMEMBER_PAY_RATE', default: 15.5, nullable: false })
  teamMemberPayRate: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'TEAMMEMBER_CREATED_DATE', default: () => 'now()', nullable: false })
  teamMemberCreatedDate: Date;

  @Column({ type: 'text', name: 'TEAMMEMBER_HOME_BASE_LOCATION', nullable: true })
  teamMemberHomeBaseLocation: string;

  @OneToMany(() => Order, order => order.teamMember)
  orders: Order[];

  @OneToMany(() => OrderItemDeliverable, (entity) => entity.orderItem)
  orderItemDeliverables: OrderItemDeliverable[];

  @OneToMany(() => ProfitRecord, record => record.profitRecordTeamMember)
  profitRecords: ProfitRecord[];

  @OneToMany(() => TeamMemberPayRate, payRate => payRate.teamMember)
  payRates: TeamMemberPayRate[];

  @OneToMany(() => TimeRegion, region => region.teamMember)
  timeRegions: TimeRegion[];
}
