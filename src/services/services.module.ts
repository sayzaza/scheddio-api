import { Module } from '@nestjs/common';
import { OAuthService } from './quickbooks/oauth.service';
import { QuickbooksInvoiceService } from './quickbooks/quickbooks-invoice.service';
import { GoogleMapsService } from './google-maps';

@Module({
  providers: [OAuthService, QuickbooksInvoiceService, GoogleMapsService],
  exports: [OAuthService, QuickbooksInvoiceService, GoogleMapsService],
})
export class ServicesModule {}
