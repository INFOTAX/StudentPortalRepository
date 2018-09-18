import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navigationtop',
  templateUrl: './navigationtop.component.html',
  styleUrls: ['./navigationtop.component.css']
})
export class NavigationtopComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }
  register(){

    this._router.navigate(['/register']);
   
  }
  login(){

    this._router.navigate(['/login']);
   
  }
}
