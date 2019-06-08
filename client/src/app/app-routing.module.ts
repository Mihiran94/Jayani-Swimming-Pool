import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ItemsComponent } from './components/items/items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserItemsComponent } from './components/user-items/user-items.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {UserprofileComponent} from './components/userprofile/userprofile.component'
import { AuthGuard } from "./guards/auth.guard";
import { CustomerGuard } from './guards/customer.guard';
import {CalculatorComponent } from './components/calculator/calculator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'authenticate', component: LoginComponent },
  {path : 'userprofile',component:UserprofileComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, CustomerGuard] },
  { path: 'user/item/:id', component: UserItemsComponent, canActivate: [AuthGuard] },
  { path: 'calculator' ,component:CalculatorComponent},
  { path: '**', component: NotFoundComponent }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ HomeComponent, ItemsComponent, AboutComponent, RegisterComponent, LoginComponent, UserItemsComponent, DashboardComponent, NotFoundComponent ];
