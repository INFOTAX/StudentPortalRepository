import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationtopComponent } from './navigationtop/navigationtop.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationtopComponent, FooterComponent],
  exports:[NavigationtopComponent,FooterComponent]
})
export class SharedModule { }
