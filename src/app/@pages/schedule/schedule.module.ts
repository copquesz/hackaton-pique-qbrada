import { SharedModule } from 'src/app/@shared/shared.module';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';

@NgModule({
  imports: [
    ScheduleRoutingModule,
    SharedModule,
    CommonModule
  ],
  declarations: [ScheduleComponent]
})
export class ScheduleModule { }
