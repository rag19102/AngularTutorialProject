import { Employee } from '../models/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/observable';
import { Observable, observable, of } from 'rxjs';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  private listEmployee: Employee[] = [
    {
      id: 1,
      name: 'mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@gmail.com',
      dateOfBirth: new Date('10/05/1998'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/mark.png',
    },
    {
      id: 2,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'john@gmail.com',
      dateOfBirth: new Date('10/05/1998'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/john.png',
    },
    {
      id: 3,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Email',
      email: 'mary@gmail.com',
      dateOfBirth: new Date('10/05/1998'),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/mary.png',
    },
  ];

  getemployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>('http://localhost:3000/employees');
    // return of(this.listEmployee);
  }

  getemployee(id: number): Employee {
    return this.listEmployee.find((e) => e.id === id);
  }

  save(employee: Employee): Observable<Employee> {
    if (employee.id === null) {
      return this._httpClient.post<Employee>(
        'http://localhost:3000/employees',
        employee
      );
      console.log('Yes       Done');
    }
  }
}
