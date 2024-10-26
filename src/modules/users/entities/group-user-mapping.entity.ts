import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './user.entity';
import { Group } from './group.entity';
import { GroupMemberRole } from './group-member-role.entity';
import { GroupMemberType } from './group-member-type.entity';

@Entity({ name: 'group_user_mapping', schema: 'public' })
export class GroupUserMapping {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Group, group => group.groupUserMappings)
  @JoinColumn({ name: 'GROUP_ID', foreignKeyConstraintName: 'group_user_mapping_GROUP_ID_fkey' })
  group: Group;

  @ManyToOne(() => User, user => user.groupUserMappings)
  @JoinColumn({ name: 'USER_ID', foreignKeyConstraintName: 'group_user_mapping_USER_ID_fkey' })
  user: User;

  @ManyToOne(() => GroupMemberType, type => type.groupUserMappings)
  @JoinColumn({ name: 'MEMBER_TYPE', foreignKeyConstraintName: 'group_user_mapping_MEMBER_TYPE_fkey' })
  memberType: GroupMemberType;

  @ManyToOne(() => GroupMemberRole, role => role.groupUserMappings)
  @JoinColumn({ name: 'MEMBER_ROLE', foreignKeyConstraintName: 'group_user_mapping_MEMBER_ROLE_fkey' })
  memberRole: GroupMemberRole;
}
