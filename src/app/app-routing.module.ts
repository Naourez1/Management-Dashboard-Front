import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { IndicateursComponent } from './indicateurs/indicateurs.component';
import { TeamComponent } from './team/team.component';
import { EditDashComponent } from './edit-dash/edit-dash.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { PlanningComponent } from './planning/planning.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'indicateur', component: IndicateursComponent},
  {path: 'todolist', component: TodoListComponent},
  {path: 'team', component: TeamComponent},
  {path: 'editdash', component: EditDashComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'user', component: UserComponent},
  {path: 'pm', component: PmComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'planning', component: PlanningComponent},
  {path: 'signup', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
