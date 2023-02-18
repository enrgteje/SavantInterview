import { Component, Inject, Optional } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface ItemData {
  name: string;
  num: number;
  expirationDate: string;
}

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss'],
})
export class MaterialDialogComponent {
  name: string;
  num: number;
  expirationDate: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: { name: '', num: null, expDate: null },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog Result: ${result.data}`);
    });
  }
}
