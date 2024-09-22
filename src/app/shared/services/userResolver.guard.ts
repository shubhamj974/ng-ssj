import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { Iuser } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UserResolverGuard implements Resolve<Iuser> {
  constructor(private _userService: UsersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Iuser | Observable<Iuser> | Promise<Iuser> {
    let userId = route.params['userID'];
    return this._userService.getSingleUser(userId);
  }
}
