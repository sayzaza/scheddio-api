import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'buckets', schema: 'storage' })
export class StorageBucket {
  @PrimaryColumn({ type: 'text', name: 'id' })
  id: string;

  @Column({ type: 'text', name: 'name', nullable: false })
  name: string;

  @Column({ type: 'uuid', name: 'owner', nullable: true, comment: 'Field is deprecated, use owner_id instead' })
  owner: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'now()', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', default: () => 'now()', nullable: true })
  updatedAt: Date;

  @Column({ type: 'boolean', name: 'public', default: false, nullable: true })
  isPublic: boolean;

  @Column({ type: 'boolean', name: 'avif_autodetection', default: false, nullable: true })
  avifAutodetection: boolean;

  @Column({ type: 'bigint', name: 'file_size_limit', nullable: true })
  fileSizeLimit: number;

  @Column({ type: 'text', array: true, name: 'allowed_mime_types', nullable: true })
  allowedMimeTypes: string[];

  @Column({ type: 'text', name: 'owner_id', nullable: true })
  ownerId: string;
}
