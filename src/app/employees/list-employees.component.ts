import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
// import { Observable } from 'rxjs/Observable';/

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[];
  // panelExpand = true;

  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filteredEmployee(value);
  }

  filteredEmployee(searchString: string) {
    return this.employees.filter(
      (employee) =>
        employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {}

  async delay() {
    await timer(2000);
    return true;
  }

  ngOnInit(): void {
    const times = this.delay();

    this._employeeService.getemployees().subscribe((empList) => {
      this.employees = empList;
      this.filteredEmployees = this.employees;
      console.log(this.employees);
    });
    // this.employees = this._employeeService.getemployees();
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employee', employeeId]);
  }
}
