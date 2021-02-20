import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectRequiredValidatorDirective } from './shared/SelectRequiredvalidator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { Route } from '@angular/compiler/src/core';

import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employeeFillter.pipe';
import { ListTableContentComponent } from './ListData/list-table-content/list-table-content.component';
import { ListTableService } from './ListData/listTable.service';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'employee/:id', component: EmployeeDetailsComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'Data', component:ListTableContentComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    ListTableContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
  ],
  providers: [EmployeeService,ListTableService],
  bootstrap: [AppComponent],
})
export class AppModule {}
