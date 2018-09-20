import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Register } from '../register';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  register : Register;
  
  constructor(private fb: FormBuilder,private _router : Router,private registerService : RegisterService) { }
 
  ngOnInit() {
    this.registerForm = this.newForm();
   
  }
  newForm(): FormGroup {
    return this.fb.group({
      
      name: [''],
     email: [''],
     password: [''],
     confirmPassword: [''],
      qualification: [''],
     contactNumber: [''],
     address: [''],
    
    });
  }

  create(){
    let createUser = Object.assign({},this.register,this.registerForm.value);
    this.registerService.createUser(createUser).subscribe(() => alert('Hmm')); 
    return this._router.navigate(['login']);
  }


}
