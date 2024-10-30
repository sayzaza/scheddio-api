import { ApiProperty } from '@nestjs/swagger';

export class OAuthCallbackRedirectDto {
  @ApiProperty({ description: 'The frontend route for user authentication.' })
  url: string;
}