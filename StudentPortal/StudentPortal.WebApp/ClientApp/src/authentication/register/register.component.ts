import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  
  constructor(private fb: FormBuilder) { }
 
  ngOnInit() {
    this.registerForm = this.newForm();
   
  }
  newForm(): FormGroup {
    return this.fb.group({
      id: 0,
      name: [''],
     email: [''],
     password: [''],
     confirmPassword: [''],
      qualification: [''],
     contactNumber: [''],
     address: [''],
    
    });
  }

}
