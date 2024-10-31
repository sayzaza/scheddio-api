import { Controller, Post } from '@nestjs/common';
import { QuickbooksInvoiceService } from '../../services/quickbooks/quickbooks-invoice.service';
import { GoogleMapsService } from '../../services/google-maps';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(
    private quickBooksService: QuickbooksInvoiceService,
    private googleService: GoogleMapsService,
    private ordersService: OrderService,
  ) {
  }
  @Post()
  async newOrder() {
    // step 1
    try {
      const invoice = await this.quickBooksService.createInvoice();
      const event = await this.googleService.createEvent();
      const order = await this.ordersService.addOrder(payload);
    } catch (e) {
      // cancel invoice
      // cancel event
      // remove order
    }
  }
}
