import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'appointment_table', schema: 'public' })
export class Appointment {
  @PrimaryColumn({ type: 'bigint', name: 'APPOINTMENT_ID' })
  appointmentId: number;

  @Column({ type: 'bigint', name: 'ORDER_NUMBER', nullable: true })
  orderNumber: number;

  @Column({ type: 'text', name: 'APPOINTMENT_DATE', nullable: true })
  appointmentDate: string;

  @Column({ type: 'bigint', name: 'APPOINTMENT_DURATION', nullable: true })
  appointmentDuration: number;
}
