import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-phycopy',
  templateUrl: './phycopy.component.html',
  styleUrls: ['./phycopy.component.css']
})
export class PhycopyComponent implements OnInit {
date = new Date();
  constructor(private _router : Router) { }

  ngOnInit() {
  }
  phycopy(){

    this._router.navigate(['/phycopy']);
   
  }

}
