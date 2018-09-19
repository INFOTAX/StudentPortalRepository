import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-softcopy',
  templateUrl: './softcopy.component.html',
  styleUrls: ['./softcopy.component.css']
})
export class SoftcopyComponent implements OnInit {
  date = new Date();
  constructor(private _router : Router) { }

  ngOnInit() {
  }
  softcopy(){

    this._router.navigate(['/softcopy']);
   
  }
}
