import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunComponent } from './run/run.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/services/auth.guard';
import { RunDetailsComponent } from './run/run-details/run-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'runs', component: RunComponent /*, canActivate: [AuthGuard] */},
  {path: 'runs/:runId', component: RunDetailsComponent},
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
