import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftcopyComponent } from './softcopy/softcopy.component';
import { PhycopyComponent } from './phycopy/phycopy.component';
import { YearcopyComponent } from './yearcopy/yearcopy.component';
import { SharedModule } from '../shared/shared.module';
import { TopnavComponent } from './topnav/topnav.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [SoftcopyComponent, PhycopyComponent, YearcopyComponent, TopnavComponent]
})
export class InvoiceModule { }
