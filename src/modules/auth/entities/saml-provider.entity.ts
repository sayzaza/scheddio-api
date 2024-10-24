import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'saml_providers', schema: 'auth' })
export class SamlProvider {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'uuid', name: 'sso_provider_id', nullable: false })
  ssoProviderId: string;

  @Column({ type: 'text', name: 'entity_id', nullable: false })
  entityId: string;

  @Column({ type: 'text', name: 'metadata_xml', nullable: false })
  metadataXml: string;

  @Column({ type: 'text', name: 'metadata_url', nullable: true })
  metadataUrl: string;

  @Column({ type: 'jsonb', name: 'attribute_mapping', nullable: true })
  attributeMapping: object;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column({ type: 'text', name: 'name_id_format', nullable: true })
  nameIdFormat: string;
}
