import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
//import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSubjectsComponent } from './admin-subjects/admin-subjects.component';
import { AdminGuard } from './admin.guard';
import { BscCsComponent } from './subjects/bsc-cs/bsc-cs.component';
import { BscIsComponent } from './subjects/bsc-is/bsc-is.component';
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
      {
        path: 'subjects-bsc-cs',
        component: BscCsComponent,
        outlet: 'admin'
      },
      {
        path: 'subjects-bsc-is',
        component: BscIsComponent,
        outlet: 'admin'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
