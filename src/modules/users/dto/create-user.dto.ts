import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

import { MIN_PASSWORD_LENGTH } from '../../../shared/constants';

export class CreateUserDto {
  @ApiProperty({
    description: 'An email field for user registration',
    required: true,
  })
  @IsNotEmpty({ message: 'Email field cannot be empty' })
  @IsEmail({}, { message: 'input should have an email format' })
  email: string;

  @ApiProperty({
    description: 'A password field for user registration',
    required: true,
  })
  @IsNotEmpty({ message: 'input should have a password' })
  @MinLength(MIN_PASSWORD_LENGTH, {
    message: `password string should be longer than ${MIN_PASSWORD_LENGTH}`,
  })
  password: string;
}
