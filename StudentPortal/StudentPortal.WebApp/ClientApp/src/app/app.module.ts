import { NgtUniversalModule } from '@ng-toolkit/universal';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { CommonModule } from '@angular/common';
import {AccordionModule} from 'primeng/accordion';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MenuItem} from 'primeng/api';            
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
import {MessageService} from 'primeng/api';
import { Message } from 'primeng/components/common/api';
export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
    MessageModule,
    MessagesModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AccordionModule,
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
  providers: [MessageService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
  ],
})
export class AppModule { }
