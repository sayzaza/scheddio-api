import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'messages', schema: 'realtime' })
export class RealtimeMessage {
  @PrimaryColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column({ type: 'text', name: 'topic', nullable: false })
  topic: string;

  @Column({ type: 'text', name: 'extension', nullable: false })
  extension: string;

  @CreateDateColumn({ type: 'timestamp without time zone', name: 'inserted_at', nullable: false })
  insertedAt: Date;

  @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at', nullable: false })
  updatedAt: Date;
}
