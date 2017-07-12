import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2DragDropModule } from 'ng2-drag-drop';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TenantListComponent } from './tenant/tenant-list/tenant-list.component';
import { TenantComponent } from './tenant/tenant.component';
import { ModalModule } from 'ngx-bootstrap';
import {AppRoutingModule} from './app.route';
import { TenantEditComponent } from './tenant/tenant-edit/tenant-edit.component';
 import {  ReactiveFormsModule } from '@angular/forms';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { MaterialModule } from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import {DataTableModule} from "angular2-datatable";
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ChecklistDirective } from 'ng2-checklist';
import { TenantCreateComponent } from './tenant/tenant-create/tenant-create.component';
import { TenantItemComponent } from './tenant/tenant-list/tenant-item/tenant-item.component';
import { UserComponent } from './tenant/user/user.component';
import { ToggleClassDirective } from './tenant/tenant-list/tenant-item/toggle-class.directive';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TenantDetailComponent } from './tenant/tenant-detail/tenant-detail.component';
import { TenantDetailsComponent } from './tenant/tenant-details/tenant-details.component';
import { ClassSelectorDirective } from './tenant/class-selector.directive';
import { UserItemComponent } from './tenant/user/user-item/user-item.component';
import { TenantDeleteComponent } from './tenant/tenant-delete/tenant-delete.component';
import { UsergroupComponent } from './tenant/usergroup/usergroup.component';
import { UserDetailComponent } from './tenant/user/user-detail/user-detail.component';
import { UserEditComponent } from './tenant/user/user-edit/user-edit.component';
import { UserDeleteComponent } from './tenant/user/user-delete/user-delete.component';
import { PermissionsComponent } from './tenant/permissions/permissions.component';
import { PermissionsItemComponent } from './tenant/permissions/permissions-item/permissions-item.component';
import { UsergroupItemComponent } from './tenant/usergroup/usergroup-item/usergroup-item.component';
import { PermissionCreateComponent } from './tenant/permissions/permission-create/permission-create.component';
import { UserCreateComponent } from './tenant/user/user-create/user-create.component';
import { AuthmethodComponent } from './authmethod/authmethod.component';
import { AuthmethodconfigComponent } from './authmethodconfig/authmethodconfig.component';
import { AuthmethodconfigCreateComponent } from './authmethodconfig/authmethodconfig-create/authmethodconfig-create.component';
import { AuthmethodItemComponent } from './authmethod/authmethod-item/authmethod-item.component';
import { AuthmethodCreateComponent } from './authmethod/authmethod-create/authmethod-create.component';
import { AuthmethodEditComponent } from './authmethod/authmethod-edit/authmethod-edit.component';
import { AuthmethodconfigItemComponent } from './authmethodconfig/authmethodconfig-item/authmethodconfig-item.component';
import { AuthmethodconfigEditComponent } from './authmethodconfig/authmethodconfig-edit/authmethodconfig-edit.component';
import { AuthworkflowComponent } from './authworkflow/authworkflow.component';
import { AuthworkflowCreateComponent } from './authworkflow/authworkflow-create/authworkflow-create.component';
import { AuthworkflowEditComponent } from './authworkflow/authworkflow-edit/authworkflow-edit.component';
import { AuthworkflowItemComponent } from './authworkflow/authworkflow-item/authworkflow-item.component';
import { AuthworkflowDeleteComponent } from './authworkflow/authworkflow-delete/authworkflow-delete.component';
import { AuthworkflowUsergroupComponent } from './authworkflow-usergroup/authworkflow-usergroup.component';
import { AuthworkflowUsergroupCreateComponent } from './authworkflow-usergroup/authworkflow-usergroup-create/authworkflow-usergroup-create.component';
import { CanActivateViaAuthGuard } from "./canActivateviaGuard.service";
import { UsergroupCreateComponent } from "./tenant/usergroup/usergroup-create/usergroup-create.component";
import { UsergroupEditComponent } from './tenant/usergroup/usergroup-edit/usergroup-edit.component';
import { UsergroupDeleteComponent } from './tenant/usergroup/usergroup-delete/usergroup-delete.component';
import {ButtonModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TenantListComponent,
    TenantComponent,
    TenantEditComponent,
    TenantCreateComponent,
    TenantItemComponent,
    UserComponent,
    ToggleClassDirective,
    TenantDetailComponent,
    TenantDetailsComponent,
    ClassSelectorDirective,
    UserItemComponent,
    TenantDeleteComponent,
    UsergroupComponent,
    UserDetailComponent,
    UserEditComponent,
    UserDeleteComponent,
    PermissionsComponent,
    PermissionsItemComponent,
    UsergroupItemComponent,
    PermissionCreateComponent,
    UserCreateComponent,
    AuthmethodComponent,
    AuthmethodconfigComponent,
    AuthmethodconfigCreateComponent,
    AuthmethodItemComponent,
    AuthmethodCreateComponent,
    AuthmethodEditComponent,
    AuthmethodconfigItemComponent,
    ChecklistDirective,
    AuthmethodconfigEditComponent,
    AuthworkflowComponent,
    AuthworkflowCreateComponent,
    AuthworkflowEditComponent,
    AuthworkflowItemComponent,
    AuthworkflowDeleteComponent,
    AuthworkflowUsergroupComponent,
    AuthworkflowUsergroupCreateComponent,
    UsergroupCreateComponent,
    UsergroupEditComponent,
    UsergroupDeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2FilterPipeModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
   MaterialModule,
   BrowserAnimationsModule,
   DataTableModule,
   AccordionModule.forRoot(),
   Ng2DragDropModule,
   AlertModule.forRoot(),
   ButtonModule,
   PanelModule,
   DataListModule,
   BrowserAnimationsModule
   
  ],
  providers: [ CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
