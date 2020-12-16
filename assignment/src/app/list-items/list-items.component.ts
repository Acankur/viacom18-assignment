import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  public dataSource: [];
  public displayedColumns: string[];

  constructor() {
      this.displayedColumns = ['First name', 'Last name', 'Contact'];
     }


  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('form-data'));
    this.dataSource = data.lineControls;
  }


}
