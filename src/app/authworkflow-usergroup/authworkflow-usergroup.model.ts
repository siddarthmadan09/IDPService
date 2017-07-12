import { AuthMethodConfig } from "../authmethodconfig/authmethodconfig.model";

export class AuthworkflowUsergroup {
    id:string;
    name:string;
    description:string;
    userGroupId:string;
    authMethodConfigList:AuthMethodConfig[];

}