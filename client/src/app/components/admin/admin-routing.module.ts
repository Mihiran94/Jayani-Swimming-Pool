import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSubjectsComponent } from './admin-subjects/admin-subjects.component';
import { AdminGuard } from './admin.guard';

import { AdminEmployeeComponent} from './admin-employee/admin-employee.component'
import { AdminItemComponent } from './admin-item/admin-item.component';
const routes: Routes = [
  // {
  //   path: 'admin/login',
  //   component: AdminLoginComponent,
  // },
  {
    path: 'admin',
    component: AdminHomeComponent,
    // canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: '/admin/(admin:dashboard)',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        outlet: 'admin'
      },
      {
        path: 'employee',
        component: AdminEmployeeComponent,
        outlet: 'admin'
      },
      {
        path: 'students',
        component: AdminItemComponent,
        outlet: 'admin',
      },
      {
        path: 'subjects',
        component: AdminSubjectsComponent,
        outlet: 'admin'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
