import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
export interface item {
  name: string;
  num: number;
  expirationDate: any;
}

let items: item[] = [
  { name: 'Apple', num: 1, expirationDate: '2/16/2023' },
  { name: 'Orange', num: 2, expirationDate: '2/16/2023' },
  { name: 'Melon', num: 3, expirationDate: '2/16/2023' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
})
export class MaterialTableComponent {
  @ViewChild('matTable') table: MatTable<any>;
  displayedColumns: string[] = ['name', 'number', 'expDate', 'delete'];
  dataSource = items;

  deleteItem(name: string): void {
    items = items.filter((item) => item.name != name);
    this.table.dataSource = items;
    this.table.renderRows();
  }
}
