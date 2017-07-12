import {Permission} from '../permissions/permission';
export class UserGroup{
	id:String;
	name:String;
	active:Boolean;
	description:String;
	tenantId:String;
	permissions:Permission[];
}