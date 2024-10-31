import { Injectable } from '@nestjs/common';

@Injectable()
export class QuickbooksInvoiceService {
  constructor() {
  }

  async createInvoice(payload: any, companyId: number, accessToken) {
    const url = `https://${process.env.QUICKBOOKS_API_URI}/v3/company/${companyId}/invoice?minorversion=${process.env.QUICKBOOKS_MINOR_VERSION}`;
    try {
      const invoiceJson = this.createInvoiceJson(payload);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoiceJson),
      });
      console.log(invoiceJson);
      if (!response.ok) {
        const errorResponse: any = await response.text();
        const errorMessage = errorResponse.Fault.Error[0].Message;
        throw new Error(`Error creating invoice: ${response.statusText}\nResponse: ${errorMessage}`);
      }

      const responseData = await response.json();
      console.log('invoice created successfully:', responseData);
      return responseData;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  async cancelInvoice(id: string) {
    // TODO: trigger an api call for cancelling quickbooks invoice
  }

  private createInvoiceJson(payload: any) {
    // TODO: convert payload to json invoice format for quickbooks api creation
    return {};
  }
}