import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSubjectsComponent } from './admin-subjects/admin-subjects.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminItemComponent } from './admin-item/admin-item.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    SidebarComponent,

    AdminDashboardComponent,
    AdminSubjectsComponent,
    AdminLoginComponent,

    AdminEmployeeComponent,
    AdminItemComponent,
    AdminProfileComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
