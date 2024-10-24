import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 's3_multipart_uploads', schema: 'storage' })
export class S3MultipartUpload {
  @PrimaryColumn({ type: 'text', name: 'id' })
  id: string;

  @Column({ type: 'bigint', name: 'in_progress_size', default: 0, nullable: false })
  inProgressSize: number;

  @Column({ type: 'text', name: 'upload_signature', nullable: false })
  uploadSignature: string;

  @Column({ type: 'text', name: 'bucket_id', nullable: false })
  bucketId: string;

  @Column({ type: 'text', name: 'key', nullable: false })
  key: string;

  @Column({ type: 'text', name: 'version', nullable: false })
  version: string;

  @Column({ type: 'text', name: 'owner_id', nullable: true })
  ownerId: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'now()', nullable: false })
  createdAt: Date;

  @Column({ type: 'jsonb', name: 'user_metadata', nullable: true })
  userMetadata: object;
}
