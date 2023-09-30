import { Component } from '@angular/core';
import { Users } from './shared/data-source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table-component';
  rowData : any = Users;
  columnDef = [
    {'Head':'Firstname', 'FieldName': 'firstname'},
    {'Head':'Lastname', 'FieldName': 'lastname'},
    {'Head':'Email', 'FieldName': 'email'},
    {'Head':'Birthday', 'FieldName': 'birthday'},
    {'Head':'Action', 'FieldName': ''},
  ]

  onDelete(e: any){
    console.log(e)
  }

  onEdit(e:any){
    console.log(e)
  }
}
