import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'objects', schema: 'storage' })
export class StorageObject {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'text', name: 'bucket_id', nullable: true })
  bucketId: string;

  @Column({ type: 'text', name: 'name', nullable: true })
  name: string;

  @Column({ type: 'uuid', name: 'owner', nullable: true })
  owner: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'now()', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', default: () => 'now()', nullable: true })
  updatedAt: Date;

  @CreateDateColumn({ type: 'timestamptz', name: 'last_accessed_at', default: () => 'now()', nullable: true })
  lastAccessedAt: Date;

  @Column({ type: 'jsonb', name: 'metadata', nullable: true })
  metadata: object;

  @Column({ type: 'text', name: 'path_tokens', generatedType: 'STORED', asExpression: "string_to_array(name, '/'::text)", nullable: true })
  pathTokens: string[];

  @Column({ type: 'text', name: 'version', nullable: true })
  version: string;

  @Column({ type: 'text', name: 'owner_id', nullable: true })
  ownerId: string;

  @Column({ type: 'jsonb', name: 'user_metadata', nullable: true })
  userMetadata: object;
}
