import { Component, OnInit } from '@angular/core';
import { LoginService, ILogin } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService,private router : Router) { }

  ngOnInit() {
  }

  login: ILogin;


    doLogin(userName: string, password: string): void {
        var online= navigator.onLine;
        if(!online){
            
        }


        this.login = {
            userName: userName,
            password: password
        };


            this.loginService.getToken(this.login)
                .subscribe(() => {
                    
                        this.router.navigate(['/home']);
                });


    }


}
