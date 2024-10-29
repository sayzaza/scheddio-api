import { ApiProperty } from '@nestjs/swagger';

export class OauthUriDto {
  @ApiProperty({ description: 'OAuth popup URI' })
  uri: string;
}