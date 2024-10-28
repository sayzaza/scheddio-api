import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity({ name: 'appointment_table', schema: 'public' })
export class Appointment {
  @PrimaryColumn({ type: 'bigint', name: 'APPOINTMENT_ID' })
  appointmentId: number;

  @ManyToOne(() => Order, order => order.appointments)
  @JoinColumn({ name: 'ORDER_NUMBER', foreignKeyConstraintName: 'appointment_table_ORDER_NUMBER_fkey' })
  order: Order;

  @Column({ type: 'text', name: 'APPOINTMENT_DATE', nullable: true })
  appointmentDate: string;

  @Column({ type: 'bigint', name: 'APPOINTMENT_DURATION', nullable: true })
  appointmentDuration: number;
}
