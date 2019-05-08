import {ParentClass} from "./ParentClass";

export class ChildClass extends ParentClass {

  private response: any;

  async send(): Promise<any>{
    try {
      await this.response = super.send();
      return this.response;
    }
    catch(e) {
      console.log('Error:', e);
    }
  }

  public  printResponse(): void {
    console.log(this.response);
  };
}
