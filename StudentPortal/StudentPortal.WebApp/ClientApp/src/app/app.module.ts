import { NgtUniversalModule } from '@ng-toolkit/universal';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { InvoiceModule } from '../invoice/invoice.module';
import { JwtModule } from '@auth0/angular-jwt';
import { TokenInterceptor } from '../authentication/services/token.interceptor';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    InvoiceModule,
    SharedModule,
    CommonModule,
    NgtUniversalModule,
    HomeModule, 
    AppRoutingModule,
    AuthenticationModule,
    JwtModule.forRoot({
      config: {

        headerName: 'Authorization',
        authScheme: 'Bearer ',
        tokenGetter: tokenGetter,

      }
    })

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
  ],
})
export class AppModule { }
