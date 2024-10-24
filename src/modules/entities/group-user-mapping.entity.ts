import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'group_user_mapping', schema: 'public' })
export class GroupUserMapping {
  @PrimaryColumn({ type: 'integer', name: 'GROUP_ID' })
  groupId: number;

  @Column({ type: 'integer', name: 'USER_ID', nullable: false })
  userId: number;

  @Column({ type: 'bigint', name: 'MEMBER_TYPE', nullable: false })
  memberType: number;

  @Column({ type: 'bigint', name: 'MEMBER_ROLE', nullable: false })
  memberRole: number;
}
