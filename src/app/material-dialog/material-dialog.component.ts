import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss'],
})
export class MaterialDialogComponent {
  constructor(public dialog: MatDialog) {}

  // Opens the dialog window
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {});
  }
}
