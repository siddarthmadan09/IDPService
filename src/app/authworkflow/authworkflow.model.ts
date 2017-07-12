import { AuthMethodConfig } from "../authmethodconfig/authmethodconfig.model";

export class Authworkflow {
    id:string;
    name:string;
    description:string;
    tenantId:string;
    userId:string;
    usergroupId:string;
    authMethodConfigList:AuthMethodConfig[]
}