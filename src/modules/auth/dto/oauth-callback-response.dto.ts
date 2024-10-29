import { ApiProperty } from '@nestjs/swagger';

export class OAuthCallbackResponseDto {
  @ApiProperty({ description: 'The frontend route for user authentication.' })
  redirectUrl: string;
}