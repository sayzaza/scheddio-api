import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcrypt';
import { UserDto } from '../dto/user.dto';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true, default: undefined })
  name: string;

  @BeforeInsert()
  async preProcess() {
    return hash(this.password, 10).then(
      (encrypted) => (this.password = encrypted),
    );
  }

  constructor(email?: string, password?: string) {
    this.email = email?.toLowerCase();
    this.password = password;
  }

  toDto(): UserDto {
    return {
      email: this.email,
      name: this.name,
    };
  }
}
