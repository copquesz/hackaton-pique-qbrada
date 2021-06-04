import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  tabs = 1;

  constructor() { }

  ngOnInit() {
  }

  setTabs(tab: number){
    this.tabs = tab;
  }

}
