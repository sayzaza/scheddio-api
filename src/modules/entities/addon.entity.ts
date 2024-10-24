import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'addon_table', schema: 'public' })
export class Addon {
  @PrimaryColumn({ type: 'bigint', name: 'ADDON_ID' })
  addonId: number;

  @Column({ type: 'text', name: 'ADDON_TYPE', nullable: true })
  addonType: string;

  @Column({ type: 'text', name: 'ADDON_NAME', nullable: true })
  addonName: string;

  @Column({ type: 'text', name: 'ADDON_DESCRIPTION', nullable: true })
  addonDescription: string;

  @Column({ type: 'text', name: 'ADDON_VARIANT', nullable: true })
  addonVariant: string;

  @Column({ type: 'double precision', name: 'ADDON_PRICE', nullable: true })
  addonPrice: number;

  @Column({ type: 'text', name: 'ADDON_DURATION', nullable: true })
  addonDuration: string;
}
