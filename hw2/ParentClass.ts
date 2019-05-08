import * as request from 'request-promise-native';

export class ParentClass {

  private readonly host: string;
  private wishlistResponse: any;

  constructor (host: string) {
    this.host = host;
  }

  async send(): Promise<any>{
    try {
      await this.wishlistResponse = request.get({
          uri: `${this.host}/api/wishlists`,
          json: true
      }
      return this.wishlistResponse;
    }

    catch(e) {
      console.log('Error:', e);
    }
  }
}
