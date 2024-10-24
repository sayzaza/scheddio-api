import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'EMPLOYEE_ROLES', schema: 'public' })
export class EmployeeRole {
  @PrimaryColumn({ type: 'bigint', name: 'EMPLOYEE_ROLE_ID' })
  employeeRoleId: number;

  @Column({ type: 'text', name: 'EMPLOYEE_ROLE', nullable: false })
  employeeRole: string;
}
