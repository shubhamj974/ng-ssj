import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DialogBoxService } from './dialog-box.service';
import { DialogLogoutComponent } from '../components/dialog-logout/dialog-logout.component';
import { SnackBarService } from './snack-bar.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loginStatus: boolean = false;
  private url = environment.baseUrl;
  constructor(
    private _router: Router,
    private _dialogBoxService: DialogBoxService,
    private _snackBar: SnackBarService,
    private _http: HttpClient
  ) {}

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      const token = this.getToken();
      console.log(token);
      resolve(!!token);
    });
  }

  logIn(userName: string, userPass: string) {
    console.log('object');
    const userData = { username: userName, password: userPass };
    return this._http
      .post(`${this.url}/auth/login`, userData)
      .pipe(
        map((res: any) => {
          if (res.status) {
            console.log('Login successful');
            this._snackBar.openSnackBar('Login Successfully Completed');
            this.storeToken(res.data.access_token);
            this.loginStatus = true;
            this._router.navigate(['']);
          } else {
            this._snackBar.openSnackBar('Login failed. Please try again.');
          }
        })
      )
      .subscribe();
  }

  storeToken(token: string) {
    sessionStorage.setItem('Token', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('Token');
  }

  register(userName: string, userPass: string) {
    const userData = {
      username: userName,
      password: userPass,
    };
    return this._http.post(`${this.url}/users/register`, userData).pipe(
      map((res: any) => {
        console.log(res);
        return res;
      })
    );
  }

  logOut(start: string, exist: string): void {
    const dialogRef = this._dialogBoxService.openDialog(
      start,
      exist,
      DialogLogoutComponent
    );

    dialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this._snackBar.openSnackBar('Logout Successfully Completed');
        this._router.navigate(['auth']);
        sessionStorage.removeItem('Token');
        this.loginStatus = false;
      } else {
        console.log('Logout cancelled');
      }
    });
  }
}
