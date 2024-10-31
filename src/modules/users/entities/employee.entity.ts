import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne, JoinColumn,
} from 'typeorm';
import { ClientAction } from '../../entities/client-action.entity';
import { CustomProduct } from '../../entities/custom-product.entity';
import { Action } from '../../entities/action.entity';
import { SystemUser } from '../../auth/entities/system-user.entity';

@Entity({ name: 'EMPLOYEE_TABLE', schema: 'public' })
export class Employee {
  @PrimaryGeneratedColumn('uuid', { name: 'EMPLOYEE_UID' })
  employeeUid: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'CREATED_AT', default: () => 'now()', nullable: false })
  createdAt: Date;

  @Column({ type: 'text', name: 'EMPLOYEE_EMAIL', nullable: false })
  employeeEmail: string;

  @Column({ type: 'text', name: 'EMPLOYEE_PASSWORD', nullable: false })
  employeePassword: string;

  @Column({ type: 'text', name: 'EMPLOYEE_NAME', nullable: true })
  employeeName: string;

  @Column({ type: 'text', name: 'ACCESS', default: 'ACTIVE', nullable: true })
  access: string;

  @Column({ type: 'timestamptz', name: 'LAST_LOGIN', nullable: true })
  lastLogin: Date;

  @Column({ type: 'bigint', name: 'EMPLOYEE_ROLE_ID', default: 2, nullable: true })
  employeeRoleId: number;

  @Column({ type: 'bigint', array: true, name: 'ACESS_LEVELS', default: () => "'{}'", nullable: false })
  accessLevels: number[];

  @OneToMany(() => ClientAction, entity => entity.performedBy)
  clientActions: ClientAction[];

  @OneToMany(() => CustomProduct, entity => entity.createdBy)
  customProducts: CustomProduct[];

  @OneToMany(() => Action, action => action.performedBy)
  actions: Action[];
}
