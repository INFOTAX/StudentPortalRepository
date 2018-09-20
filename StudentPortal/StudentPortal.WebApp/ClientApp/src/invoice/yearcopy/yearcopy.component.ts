import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-yearcopy',
  templateUrl: './yearcopy.component.html',
  styleUrls: ['./yearcopy.component.css']
})
export class YearcopyComponent implements OnInit {
  date = new Date();
  constructor(private _router : Router) { }

  ngOnInit() {
  }
  yearcopy(){

    this._router.navigate(['/yearcopy']);
   
  }

}
