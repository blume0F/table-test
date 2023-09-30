import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from 'src/app/shared/data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() columnDef:any[]= [];
  @Input() rowData:any[]= [];

  @Output () onEdit = new EventEmitter<any>();
  @Output () onDelete = new EventEmitter<any>();

  edit(item: any) {
    this.onEdit.emit(item);
  }
  deleteRecord(item: any) {
    this.onDelete.emit(item);
  }
  constructor() { }

  ngOnInit(): void {
  }


}
