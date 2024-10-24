import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'booking_table', schema: 'public' })
export class Booking {
  @PrimaryColumn({ type: 'bigint', name: 'id' })
  id: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'now()', nullable: false })
  createdAt: Date;

  @Column({ type: 'timestamp without time zone', name: 'booking_date', nullable: true })
  bookingDate: Date;
}
