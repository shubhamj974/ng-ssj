import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public isAccount: boolean = true;
  public email = new FormControl('', [Validators.required, Validators.email]);
  public hide = true;
  constructor(
    private _authServices: AuthService,
    private _snackBar: SnackBarService
  ) {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onLogin(userName: string, userPass: string) {
    console.log(userName, userPass);
    this._authServices.logIn(userName, userPass);
  }

  register(userName: string, userPass: string) {
    console.log(userName, userPass);
    this._authServices.register(userName, userPass).subscribe((res: any) => {
      if (res.status) {
        this.isAccount = true;
        this._snackBar.openSnackBar(res.msg);
      } else {
        this._snackBar.openSnackBar(res.msg);
      }
    });
  }
}
