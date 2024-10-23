import { ApiProperty } from '@nestjs/swagger';

export class SuccessResponse<T> {
  @ApiProperty({ name: 'Success', description: 'indicates whether the api is succeeded or not' })
  success: boolean;

  @ApiProperty({ description: 'extra data to be returned' })
  payload?: T;
}