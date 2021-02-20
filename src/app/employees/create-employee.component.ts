import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  // id: number;
  // name: any;

  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null,
    // password: null,
    // confirmPassword: null,
  };
  // fullName: any;
  // contact: any;
  // gender: any;
  // email?: any;
  // phoneNumber?: any;
  // contactPreference: any;
  // dateOfBirth: any;
  // department: any;
  // isActive: any;
  // photoPath: any;
  priviewPhoto = false;

  departments: Department[] = [
    {
      id: 1,
      name: 'Help Desk',
    },
    {
      id: 2,
      name: 'HR',
    },
    {
      id: 3,
      name: 'IT',
    },
    {
      id: 4,
      name: 'Payroll',
    },
  ];
  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2019, 11, 31),
      }
    );
  }

  ngOnInit(): void {}

  togglePhotoPath() {
    this.priviewPhoto = !this.priviewPhoto;
    // console.log(this.priviewPhoto);
  }

  saveEmployee(): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
}
