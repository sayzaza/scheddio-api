import { Module } from '@nestjs/common';
import { OAuthService } from './quickbooks/oauth.service';

@Module({
  providers: [OAuthService],
  exports: [OAuthService],
})
export class ServicesModule {}
