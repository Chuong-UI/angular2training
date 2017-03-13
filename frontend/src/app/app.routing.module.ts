import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {ChartsComponent} from './admin/charts/charts.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {ServicesComponent} from './admin/services/services.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'charts',
        component: ChartsComponent,
      },
      {
        path: 'bar-chart',
        component: ChartsComponent,
      },
      {
        path: 'line-chart',
        component: ChartsComponent,
      },
      {
        path: 'pie-chart',
        component: ChartsComponent,
      },
      {
        path: 'services',
        component: ServicesComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
