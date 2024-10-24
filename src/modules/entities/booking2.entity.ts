import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'booking_table_2', schema: 'public' })
export class BookingTable2 {
  @PrimaryColumn({ type: 'bigint', name: 'id' })
  id: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'now()', nullable: false })
  createdAt: Date;

  @Column({ type: 'timestamp without time zone', name: 'booking_date', nullable: true })
  bookingDate: Date;
}
