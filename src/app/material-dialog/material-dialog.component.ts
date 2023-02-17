import { Component, Inject, Optional } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

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
    const dialogRef = this.dialog.open(MaterialDialogComponentDialog, {
      data: {
        name: this.name,
        num: this.num,
        expirationDate: this.expirationDate,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Closed');
      this.name = result;
    });
  }
}

@Component({
  selector: 'material-dialog-component-dialog',
  templateUrl: 'material-dialog-component-dialog.html',
})
export class MaterialDialogComponentDialog {
  constructor(
    public dialogRef: MatDialogRef<MaterialDialogComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ItemData
  ) {
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
