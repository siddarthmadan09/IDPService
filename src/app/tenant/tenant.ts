export class Tenant{
	id:String;
	name:String;
	description:String;
	active:Boolean;
	emailAddress:String;
	privateKey:String;
	publicKey:String;
	authMethodType:String[];
	 constructor(json) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.active = json.active;
    this.emailAddress = json.emailAddress;
    this.privateKey = json.privateKey;
   this.publicKey = json.publicKey;
   this.authMethodType = json.authMethodType;
  }
 
}