export class ParentClass {

  private readonly host: string;
  private wishlistResponse: any;

  constructor (host: string) {
    this.host = 'https://uk.integration.thomascook.io';
  }

  async send(): Promise<any>{
    //${this.host}/api/wishlists
    try {
      await this.wishlistResponse = request.get({
          uri: `${this.host}/api/wishlists`,
          json: true
      }
      return wishlistResponse;
    }

    catch(e) {
      console.log('Error:', e);
    }
  }
}
