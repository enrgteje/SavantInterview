import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MaterialTableComponent } from './material-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [MaterialTableComponent],
  exports: [MaterialTableComponent],
})
export class MaterialTableModule {}
