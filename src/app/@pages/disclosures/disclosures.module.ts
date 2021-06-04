import { SharedModule } from 'src/app/@shared/shared.module';
import { DisclosuresRoutingModule } from './disclosures-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisclosuresComponent } from './disclosures.component';

@NgModule({
  imports: [
    DisclosuresRoutingModule,
    SharedModule,
    CommonModule
  ],
  declarations: [DisclosuresComponent]
})
export class DisclosuresModule { }
