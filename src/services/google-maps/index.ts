import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleMapsService {
  async proxy(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.error_message || 'Unknown error';
        throw new Error(`Error from Google Maps API: ${response.statusText}\nResponse: ${errorMessage}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error in proxyGoogleMapsApi:', error.message);
      throw error;
    }
  }

  async createEvent(payload: any) {
    // TODO: add google maps integration code
    return {} as any;
  }

  async removeEvent(id: string) {
    // TODO: add google maps integration code
  }
}