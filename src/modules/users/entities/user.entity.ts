import { hash } from 'bcrypt';

import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CustomerUserDto } from '../dto/customer-user.dto';
import { GroupUserMapping } from './group-user-mapping.entity';

@Entity({ name: 'users_table', schema: 'public' })
export class User {
  @PrimaryGeneratedColumn({ name: 'USER_ID', type: 'int8' })
  id: number;

  @Column({ name: 'USER_NAME', type: 'text', nullable: true })
  name: string;

  @Column({ name: 'USER_LAST_NAME', type: 'text', nullable: true })
  lastName: string;

  @Column({ name: 'USER_EMAIL', type: 'text', nullable: true })
  email: string;

  @Column({ name: 'USER_PHONE', type: 'text', nullable: true })
  phone: string;

  @Column({ name: 'SYSTEM_USER_ID', type: 'uuid', nullable: true })
  @Generated('uuid')
  systemUserId: string;

  @Column({ name: 'USER_TEAM_NAME', type: 'text', nullable: true })
  teamName: string;

  @Column({ name: 'FULL_NAME', type: 'text', nullable: true })
  fullName: string;

  @Column({ name: 'TOP_CLIENT', type: 'bool', default: false })
  topClient: boolean;

  @CreateDateColumn({
    name: 'CLIENT_CREATED_DATE',
    type: 'timestamptz',
    nullable: true,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'LAST_TRANSACTION_DATE',
    type: 'timestamptz',
    nullable: true,
  })
  lastTransaction: Date;

  @Column({ name: 'INSTAGRAM_USER', type: 'text', nullable: true })
  instagramUser: string;

  @Column({ name: 'INSTAGRAM_GROUP', type: 'text', nullable: true })
  instagramGroup: string;

  @Column({ name: 'INSTAGRAM_OFFICE', type: 'text', nullable: true })
  instagramOffice: string;

  @Column({ name: 'GROUP_NAME', type: 'text', nullable: true })
  groupName: string;

  @Column({ name: 'USER_MOOD', type: 'text', nullable: true })
  mood: string;

  @Column({ name: 'IS_LOYAL', type: 'bool', default: false })
  isLoyal: boolean;

  @Column({ name: 'encrypted_password', default: '' })
  password: string;

  @Column({ name: 'PROFILE_PICTURE_LINK', type: 'text', nullable: true })
  profilePictureLink: string;

  @Column({
    name: 'SERVICE_PROVIDER_INTRSUCTIONS',
    type: 'text',
    nullable: true,
  })
  serviceProviderInstructions: string;

  @Column({ name: 'CUSTOMER_REF_ID', type: 'int8', nullable: false })
  customerRefId: number;

  @OneToMany(() => GroupUserMapping, (entity) => entity.user)
  groupUserMappings: GroupUserMapping[];

  @BeforeInsert()
  async preProcess() {
    return hash(this.password, 10).then(
      (encrypted) => (this.password = encrypted),
    );
  }

  // DTO Conversion
  toDto(): CustomerUserDto {
    return {
      email: this.email,
      name: this.name,
      lastName: this.lastName,
      phone: this.phone,
      topClient: this.topClient,
      createdAt: this.createdAt,
      lastTransaction: this.lastTransaction,
      instagramUser: this.instagramUser,
      teamName: this.teamName,
      isLoyal: this.isLoyal,
      profilePictureLink: this.profilePictureLink,
    };
  }

  constructor(email?: string, password?: string) {
    this.email = email?.toLowerCase();
    this.password = password;
    this.customerRefId = 0;
  }
}
