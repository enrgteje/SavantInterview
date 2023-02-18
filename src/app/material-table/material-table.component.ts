import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { SendObjService } from '../send-obj.service';
export interface item {
  name: string;
  num: number;
  expirationDate: any;
}

let items: item[] = null;

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
})
export class MaterialTableComponent implements OnInit {
  @ViewChild('matTable') table: MatTable<any>;
  displayedColumns: string[] = ['name', 'number', 'expDate', 'delete'];
  dataSource = items;

  constructor(private dataService: SendObjService) {}

  deleteItem(name: string): void {
    items = items.filter((item) => item.name != name);
    this.table.dataSource = items;
    this.table.renderRows();
  }

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
