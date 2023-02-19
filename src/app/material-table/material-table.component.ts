import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { SendObjService } from '../send-obj.service';

export interface item {
  name: string;
  num: number;
  expirationDate: any;
}

let items: item[] = null;

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
})
export class MaterialTableComponent implements OnInit {
  @ViewChild('matTable') table: MatTable<any>;

  // Column categories
  displayedColumns: string[] = ['name', 'number', 'expDate', 'delete'];

  dataSource = items;

  constructor(private dataService: SendObjService) {}

  // Delete button triggers this function to remove the specific item from the
  // array
  deleteItem(name: string): void {
    items = items.filter((item) => item.name != name);
    this.table.dataSource = items;
    this.table.renderRows();
  }

  // Appends any new item to the array then updates the table element with a
  // new data source
  ngOnInit(): void {
    this.dataService.itemData$.subscribe((data) => {
      if (items === null) {
        items = [];
      }
      items.push(data);
      this.table.dataSource = items;
      this.table.renderRows();
    });
  }
}
