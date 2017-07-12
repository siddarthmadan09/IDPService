import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { TenantComponent }  from './tenant/tenant.component';
import { TenantEditComponent }  from './tenant/tenant-edit/tenant-edit.component';
import { TenantCreateComponent }  from './tenant/tenant-create/tenant-create.component';
import { UserComponent } from './tenant/user/user.component';
import { UserDetailComponent } from './tenant/user/user-detail/user-detail.component';
import { UsergroupComponent } from './tenant/usergroup/usergroup.component';
import { PermissionsComponent } from './tenant/permissions/permissions.component';
import { TenantDetailComponent }  from './tenant/tenant-detail/tenant-detail.component';
import {AuthmethodconfigComponent} from './authmethodconfig/authmethodconfig.component';
import { AuthmethodComponent } from "./authmethod/authmethod.component";
import { AuthworkflowComponent } from "./authworkflow/authworkflow.component";
import { AuthworkflowUsergroupComponent } from "./authworkflow-usergroup/authworkflow-usergroup.component";
import { CanActivateViaAuthGuard } from "./canActivateviaGuard.service";

const appRoutes: Routes = [

{path : "tenant",component: TenantComponent},
{path: "user",component:  UserComponent,children:[
{path : "user/:id",component: UserDetailComponent}]},
{path: "userGroup",component: UsergroupComponent},
{path: "permission",component: PermissionsComponent },
{path : "authmethod",component: AuthmethodComponent},
{path : "authworkflow/usergroup/:id",component: AuthworkflowUsergroupComponent},
{path : "authworkflow/tenant/:id",component: AuthworkflowComponent},
{path : "authmethodconfig/tenantId/:id",component: AuthmethodconfigComponent},
{path : "tenant/:id",component: TenantEditComponent},
 { path: '', redirectTo: 'tenant', pathMatch: 'full' },
 { path: '**', redirectTo: 'tenant' }
/*{
        path: 'detail',
        outlet: 'aside',
        component: TenantDetailComponent
    }*/

];

@NgModule({
	imports:[RouterModule.forRoot(appRoutes)],
	exports:[RouterModule]
})
export class AppRoutingModule {

}
