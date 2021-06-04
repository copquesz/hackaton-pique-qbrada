import { SharedModule } from 'src/app/@shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    ContactRoutingModule,
    SharedModule,
    CommonModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
