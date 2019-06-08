import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
//import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSubjectsComponent } from './admin-subjects/admin-subjects.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BscCsComponent } from './subjects/bsc-cs/bsc-cs.component';
import { BscIsComponent } from './subjects/bsc-is/bsc-is.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminItemComponent } from './admin-item/admin-item.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    SidebarComponent,
    //AdminStudentsComponent,
    AdminDashboardComponent,
    AdminSubjectsComponent,
    AdminLoginComponent,
    BscCsComponent,
    BscIsComponent,
    AdminEmployeeComponent,
    AdminItemComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
