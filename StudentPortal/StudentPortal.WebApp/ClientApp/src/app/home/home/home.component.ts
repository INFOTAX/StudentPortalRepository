import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }
  phycopy(){

    this._router.navigate(['/phycopy']);
   
  }
  softcopy(){

    this._router.navigate(['/softcopy']);
   
  }
  yearcopy(){

    this._router.navigate(['/yearcopy']);
   
  }
}
