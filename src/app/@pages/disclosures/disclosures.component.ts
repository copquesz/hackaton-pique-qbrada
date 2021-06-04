import { ModalDiscloureContactComponent } from './../../@shared/modal/modal-discloure-contact/modal-discloure-contact.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DisclosureService } from './../../@core/services/disclosure.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disclosures',
  templateUrl: './disclosures.component.html',
  styleUrls: ['./disclosures.component.css']
})
export class DisclosuresComponent implements OnInit {

  disclosure: any;

  // Modal
  modalRef: BsModalRef;

  openModal(email: string){
    this.modalRef = this.modalService.show(ModalDiscloureContactComponent, {class: 'modal-dialog-centered', initialState: {email: email}});
  }

  constructor(private disclosureService: DisclosureService, private modalService: BsModalService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => this.findById(Number(param.id)));
  }

  findById(id: number){
    this.disclosure =  this.disclosureService.findById(id);
  }
}
