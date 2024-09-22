import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogBoxService {
  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    comp: any
  ): MatDialogRef<boolean> {
    return this.dialog.open(comp, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
