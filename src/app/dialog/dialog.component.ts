import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { item } from '../material-table/material-table.component';
import { SendObjService } from '../send-obj.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(private dataService: SendObjService) {}

  itemForm = new FormGroup({
    name: new FormControl(''),
    num: new FormControl(),
    expDate: new FormControl(),
  });

  newItem: item;

  submitForm(): void {
    this.newItem = {
      name: this.itemForm.get('name').value,
      num: this.itemForm.get('num').value,
      expirationDate: this.itemForm.get('expDate').value,
    };
    let itemData = this.newItem;
    this.dataService.updateItem(itemData);
  }
}
