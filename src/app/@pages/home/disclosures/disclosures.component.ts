import { DisclosureService } from './../../../@core/services/disclosure.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclosures',
  templateUrl: './disclosures.component.html',
  styleUrls: ['./disclosures.component.css']
})
export class DisclosuresComponent implements OnInit {

  disclosures: Array<any>;

  constructor(private disclosureService: DisclosureService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.disclosures = this.disclosureService.findAll();
  }

}
