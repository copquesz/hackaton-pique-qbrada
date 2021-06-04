import { SharedModule } from 'src/app/@shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    AboutRoutingModule,
    SharedModule,
    CommonModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
