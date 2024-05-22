import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/User/login/login.component';
import { ReportsNavComponent } from './components/Reports/reports-nav/reports-nav.component';


const routes: Routes = [
  {path: '', redirectTo: '/login' , pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'reports',component:ReportsNavComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
