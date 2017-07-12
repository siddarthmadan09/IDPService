import {configurationList} from './configuration';
import {Authmethod} from '../authmethod/authmethod.model';
export class AuthMethodConfig{
	id:string;
	name:string;
	description:string;
	authMethod:Authmethod;
	tenantId:String;
	primary:boolean;
	configurationList:configurationList[];
}