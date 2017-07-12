import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TenantService } from "./tenant/tenant.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private tenantService: TenantService) {}

  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):  boolean {
    return this.tenantService.isLoggedIn();
  }
}