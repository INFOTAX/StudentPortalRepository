import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Register } from '../register';
import { ActivatedRoute, Router } from '@angular/router';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { SelectItem } from 'primeng/components/common/selectitem';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  register : Register;
  msg:Message;
  constructor(private fb: FormBuilder,
    private _router : Router, private messageService: MessageService,
    private registerService : RegisterService) { }
 
  ngOnInit() {
    this.registerForm = this.newForm();
   
  }
  newForm(): FormGroup {
    return this.fb.group({
      
      name: ['',[Validators.required]],
     email: ['',[Validators.required]],
     password: ['',[Validators.required]],
     confirmPassword: ['',[Validators.required]],
      qualification: ['',[Validators.required]],
     contactNumber: ['',[Validators.required]],
     address: ['',[Validators.required]],
    
    });
  }

  create(){
    let createUser = Object.assign({},this.register,this.registerForm.value);
    this.registerService.createUser(createUser).subscribe(() => alert('done')); 
    return this._router.navigate(['login']);
  }


}
