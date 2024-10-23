import { ApiProperty } from '@nestjs/swagger';

export class SignInSuccessDto {
  @ApiProperty({ description: 'accessToken in JWT format' })
  accessToken: string;
}