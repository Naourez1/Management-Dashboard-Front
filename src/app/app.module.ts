import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './helper/jwt-interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditDashComponent } from './edit-dash/edit-dash.component';
import { RegisterComponent } from './register/register.component';
import { PlanningComponent } from './planning/planning.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { IndicateursComponent } from './indicateurs/indicateurs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EditDashComponent,
    RegisterComponent,
    PlanningComponent,
    AdminComponent,
    PmComponent,
    UserComponent,
    FooterComponent,
    ProjectsComponent,
    TeamComponent,
    TodoListComponent,
    IndicateursComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
