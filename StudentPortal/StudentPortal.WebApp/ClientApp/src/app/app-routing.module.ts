import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NavigationtopComponent } from '../shared/navigationtop/navigationtop.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { LoginComponent } from '../authentication/login/login.component';

const routes: Routes = [{ path: 'home', component: HomeComponent},
{ path: 'navtop', component:NavigationtopComponent},
{ path: 'register', component:RegisterComponent},
{ path: 'login', component: LoginComponent},

{ path: '',redirectTo: '/home',pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
