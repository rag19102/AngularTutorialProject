import { Component, OnInit } from '@angular/core';
import { ListTable } from 'src/app/models/listTable';
import { ListTableService } from '../listTable.service';

@Component({
  templateUrl: './list-table-content.component.html',
  styleUrls: ['./list-table-content.component.css']
})
export class ListTableContentComponent implements OnInit {

  employees: ListTable[] = [];
  constructor(private _listService : ListTableService) { }

  ngOnInit(): void {

    this._listService.getemployees().subscribe((empList) => {
      this.employees = empList;
      console.log(this.employees);
    });
  }

}
