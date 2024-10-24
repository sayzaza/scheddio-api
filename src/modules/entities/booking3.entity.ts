import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'booking_table_3', schema: 'public' })
export class BookingTable3 {
  @PrimaryColumn({ type: 'bigint', name: 'id' })
  id: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'now()', nullable: false })
  createdAt: Date;

  @Column({ type: 'timestamp without time zone', name: 'booking_date_1', nullable: true })
  bookingDate1: Date;

  @Column({ type: 'timestamp without time zone', name: 'booking_date_2', nullable: true })
  bookingDate2: Date;
}
