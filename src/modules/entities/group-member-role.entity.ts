import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'group_member_role_table', schema: 'public' })
export class GroupMemberRole {
  @PrimaryColumn({ type: 'bigint', name: 'GROUP_ROLE_ID' })
  groupRoleId: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'CREATED_AT', default: () => 'now()', nullable: false })
  createdAt: Date;

  @Column({ type: 'text', name: 'ROLE_NAME', default: '', nullable: false })
  roleName: string;
}
