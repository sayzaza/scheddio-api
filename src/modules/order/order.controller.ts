import { Controller, Post, Req } from '@nestjs/common';

import { QuickbooksInvoiceService } from '../../services/quickbooks/quickbooks-invoice.service';
import { GoogleMapsService } from '../../services/google-maps';
import { OrderService } from './order.service';
import { AuthService } from '../auth/auth.service';

@Controller('orders')
export class OrderController {
  constructor(
    private quickBooksService: QuickbooksInvoiceService,
    private googleMapsService: GoogleMapsService,
    private ordersService: OrderService,
    private authService: AuthService,
  ) {
  }
  @Post()
  async newOrder(@Req() req: any, payload: any) {
    const companyId = req.session.realmId;
    const accessToken = await this.authService.getQuickbooksAccessToken(companyId);
    let invoice = null;
    let event = null;
    let order = null;
    try {
      invoice = await this.quickBooksService.createInvoice(payload, companyId, accessToken);
      event = await this.googleMapsService.createEvent(payload);
      order = await this.ordersService.createOrder(payload);
    } catch (e) {
      console.log('error = ', e);
      await this.quickBooksService.cancelInvoice(invoice.id);
      await this.googleMapsService.removeEvent(event.id);
      await this.ordersService.removeOrder(order.id);
    }
    // TODO: make a response data
    return {} as any;
  }
}
