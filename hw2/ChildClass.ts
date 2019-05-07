import * from "./ParentClass"

class ChildClass extends ParentClass {

  private response: any;

  async send(): Promise<any>{
    //${this.host}/api/wishlists
    await response = super.send();
    return response;
  }

  puplic void printResponse(response) {
    console.log(response);
  }
}
