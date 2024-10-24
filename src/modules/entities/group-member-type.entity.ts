import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

// TODO: the schema on the supbase does not have the primary column
@Entity({ name: 'group_member_type_table', schema: 'public' })
export class GroupMemberType {
  @PrimaryColumn({ type: 'bigint', name: 'GROUP_MEMBER_TYPE_ID' })
  groupMemberTypeId: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'CREATED_AT', default: () => 'now()', nullable: false })
  createdAt: Date;

  @Column({ type: 'text', name: 'GROUP_MEMBER_TYPE_TITLE', nullable: true })
  groupMemberTypeTitle: string;
}
