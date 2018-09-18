import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NavigationtopComponent } from '../shared/navigationtop/navigationtop.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { LoginComponent } from '../authentication/login/login.component';
import { PhycopyComponent } from '../invoice/phycopy/phycopy.component';
import { SoftcopyComponent } from '../invoice/softcopy/softcopy.component';
import { YearcopyComponent } from '../invoice/yearcopy/yearcopy.component';

const routes: Routes = [{ path: 'home', component: HomeComponent},
{ path: 'navtop', component:NavigationtopComponent},
{ path: 'register', component:RegisterComponent},
{ path: 'login', component: LoginComponent},
{ path: 'phycopy', component: PhycopyComponent},
{ path: 'softcopy', component:SoftcopyComponent},
{ path: 'yearcopy', component: YearcopyComponent },

{ path: '',redirectTo: '/home',pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
