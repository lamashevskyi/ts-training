import * from "./ParentClass"

class ChildClass extends ParentClass {

  private response: any;

  async send(): Promise<any>{
    //${this.host}/api/wishlists
    try {
      await response = super.send();
      return response;
    }
    catch(e) {
      console.log('Error:', e);
    }
  }

  puplic void printResponse(response) {
    console.log(response);
  }
}
