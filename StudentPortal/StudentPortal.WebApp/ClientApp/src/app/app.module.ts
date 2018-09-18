import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { InvoiceModule } from '../invoice/invoice.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
    InvoiceModule,
  SharedModule,
 CommonModule,
NgtUniversalModule,
HomeModule, 
  AppRoutingModule,
    AuthenticationModule
  ],
  providers: [],
})
export class AppModule { }
