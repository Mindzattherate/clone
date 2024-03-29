import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  {path:"",pathMatch:'full',redirectTo:"login"},
  {path:"login",component:LoginComponent},
  {path:"home",loadChildren:() => import('./core-module/core.module').then(m=>m.CoreModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
