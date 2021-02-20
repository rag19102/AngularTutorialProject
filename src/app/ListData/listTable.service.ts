import { ListTable } from '../models/listTable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/observable';
import { Observable, observable, of } from 'rxjs';

@Injectable()
export class ListTableService{

    constructor(private _httpClient: HttpClient) {}

    getemployees(): Observable<ListTable[]> {
        return this._httpClient.get<ListTable[]>('http://localhost:3000/data');
        // return of(this.listEmployee);
      }
}