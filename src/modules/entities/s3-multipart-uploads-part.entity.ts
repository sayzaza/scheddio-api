import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 's3_multipart_uploads_parts', schema: 'storage' })
export class S3MultipartUploadPart {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'text', name: 'upload_id', nullable: false })
  uploadId: string;

  @Column({ type: 'bigint', name: 'size', default: 0, nullable: false })
  size: number;

  @Column({ type: 'integer', name: 'part_number', nullable: false })
  partNumber: number;

  @Column({ type: 'text', name: 'bucket_id', nullable: false })
  bucketId: string;

  @Column({ type: 'text', name: 'key', nullable: false })
  key: string;

  @Column({ type: 'text', name: 'etag', nullable: false })
  etag: string;

  @Column({ type: 'text', name: 'owner_id', nullable: true })
  ownerId: string;

  @Column({ type: 'text', name: 'version', nullable: false })
  version: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'now()', nullable: false })
  createdAt: Date;
}
