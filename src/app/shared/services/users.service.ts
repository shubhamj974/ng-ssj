import { Injectable } from '@angular/core';
import { Iuser, userType } from '../models/users';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';
import { DialogBoxService } from './dialog-box.service';
import { DialogBoxComponent } from '../components/dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public usersArr: Array<Iuser> = [
    {
      userName: 'jhon',
      id: '1',
      userType: userType.Admin,
    },
    {
      userName: 'july',
      id: '2',
      userType: userType.User,
    },
    {
      userName: 'james',
      id: '3',
      userType: userType.User,
    },
    {
      userName: 'Tonny',
      id: '4',
      userType: userType.Admin,
    },
    {
      userName: 'Magnus',
      id: '5',
      userType: userType.User,
    },
  ];
  constructor(
    private _router: Router,
    private _snackbar: SnackBarService,
    private _dialogBoxService: DialogBoxService
  ) {}

  allUsers(): Array<Iuser> {
    return this.usersArr;
  }

  getSingleUser(id: string): Iuser {
    return this.usersArr.find((ele) => ele.id === id)!;
  }

  updateSinglerUser(userObj: Iuser) {
    this.usersArr.forEach((user) => {
      if (user.id === userObj.id) {
        this._snackbar.openSnackBar(
          `The user ${user.userName} is change to ${userObj.userName}!!`
        );
        user.userName = userObj.userName;
        user.userType = userObj.userType;
      }
      this._router.navigate(['users']);
      return;
    });
  }

  addNewUser(newObj: Iuser): void {
    this.usersArr.unshift(newObj);
    this._router.navigate(['/users']);
    this._snackbar.openSnackBar(`The user ${newObj.userName} is Added!!`);
  }

  deleteUser(start: string, exist: string, id: string) {
    const dialogRef = this._dialogBoxService.openDialog(
      start,
      exist,
      DialogBoxComponent
    );
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      if (res) {
        this.usersArr.forEach((ele) => {
          if (ele.id === id) {
            this._snackbar.openSnackBar(
              `The user ${ele.userName} is removed !!!`
            );

            return;
          }
        });
        let findIndex = this.usersArr.findIndex((index) => index.id === id);
        this.usersArr.splice(findIndex, 1);
        this._router.navigate(['/users']);
      } else {
        return;
      }
    });
  }
}
