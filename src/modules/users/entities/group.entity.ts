import { Entity, PrimaryColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { GroupUserMapping } from './group-user-mapping.entity';

@Entity({ name: 'group_table', schema: 'public' })
export class Group {
  @PrimaryColumn({ type: 'bigint', name: 'GROUP_ID' })
  groupId: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'CREATED_AT', default: () => 'now()', nullable: false })
  createdAt: Date;

  @Column({ type: 'text', name: 'GROUP_NAME', nullable: false })
  groupName: string;

  @Column({ type: 'text', name: 'GROUP_INSTRUCTIONS', nullable: true })
  groupInstructions: string;

  @Column({ type: 'boolean', name: 'IS_TOP_CLIENTS_GROUP', nullable: false })
  isTopClientsGroup: boolean;

  @OneToMany(() => GroupUserMapping, entity => entity.group)
  groupUserMappings: GroupUserMapping[];
}
