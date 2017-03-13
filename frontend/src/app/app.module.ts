import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DndModule } from 'ng2-dnd';

import { AlertModule, DropdownModule } from 'ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { RestangularModule } from 'ng2-restangular';

import { AppRoutingModule } from './app.routing.module';

import { TestdataService } from './services/testdata.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './admin/partials/navbar/navbar.component';
import { SidebarComponent } from './admin/partials/sidebar/sidebar.component';
import { SummaryBoxComponent } from './admin/partials/summary-box/summary-box.component';
import { ChartBoxComponent } from './admin/partials/chart-box/chart-box.component';
import { ChartsComponent } from './admin/charts/charts.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CalendarBoxComponent } from './admin/partials/calendar-box/calendar-box.component';
import { TodoListBoxComponent } from './admin/partials/todo-list-box/todo-list-box.component';
import { BreadcrumbsComponent } from './admin/partials/breadcrumbs/breadcrumbs.component';
import { ServicesComponent } from './admin/services/services.component';
import { ShowDataServiceComponent } from './admin/services/show-data-service/show-data-service.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    NavbarComponent,
    SidebarComponent,
    SummaryBoxComponent,
    ChartBoxComponent,
    ChartsComponent,
    DashboardComponent,
    CalendarBoxComponent,
    TodoListBoxComponent,
    BreadcrumbsComponent,
    ServicesComponent,
    ShowDataServiceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RestangularModule.forRoot((RestangularProvider) => {
      // RestangularProvider.setBaseUrl('http://localhost:1111/');
    // }),
    RestangularModule.forRoot(),
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    DndModule.forRoot(),
    ChartsModule,
    AppRoutingModule,
  ],
  providers: [
    TestdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
