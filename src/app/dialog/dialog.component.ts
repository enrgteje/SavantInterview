import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { item } from '../material-table/material-table.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  itemForm = new FormGroup({
    name: new FormControl(''),
    num: new FormControl(),
    expDate: new FormControl(),
  });

  newItem: item;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  submitForm(): void {
    this.newItem = {
      name: this.itemForm.get('name').value,
      num: this.itemForm.get('num').value,
      expirationDate: this.itemForm.get('expDate').value,
    };
  }

  ngOnInit() {}
}
