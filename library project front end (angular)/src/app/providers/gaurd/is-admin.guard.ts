import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  constructor(private _global: GlobalService, private _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log(!localStorage.getItem('testToken'))
      console.log( !this._global.isAuthed)
      console.log(!(localStorage.getItem('type') === 'admin'))
    if (!localStorage.getItem('testToken')  || !(localStorage.getItem('type') === 'admin')) {
      console.log("admiiiiiiiin")
      this._router.navigateByUrl("/user/login")
      return false
    }
    return true;

  }
}