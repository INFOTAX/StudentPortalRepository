import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../../authentication/services/register.service';
import { LoginService } from '../../authentication/services/login.service';
//import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-navigationtop',
  templateUrl: './navigationtop.component.html',
  host: {
    '(document:click)': 'handleClick($event)',
},
  styleUrls: ['./navigationtop.component.css']
})
export class NavigationtopComponent implements OnInit {
  
  toggleMenu: boolean = false;
  userExist = this.loginService.isAuthenticated();
  userProfile  = this.loginService.getUserProfile();
  constructor(private _router : Router,private elementRef:ElementRef,
    private loginService : LoginService ,private registerService :RegisterService) { }

  ngOnInit() {
  }
  
  register(){

    this._router.navigate(['/register']);
   
  }
  login(){

    this._router.navigate(['/login']);
   
  }
  handleClick(event){
    if (!this.elementRef.nativeElement.contains(event.target)) {
        this.toggleLogin =false;
      this.toggleMenu=false;
    }
}

toggleLogin:boolean=false;
onToggleLogin():void{
  //for logged in user profile/login toggle
  this.toggleLogin=!this.toggleLogin;     
}
logOut(){
  localStorage.removeItem('token');
  localStorage.removeItem('profile');
  localStorage.removeItem('role');
  this._router.navigate(['login']);


  

};
}
