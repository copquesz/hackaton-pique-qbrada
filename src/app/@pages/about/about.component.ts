import { ModalDisclosureComponent } from './../../@shared/modal/modal-disclosure/modal-disclosure.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // Modal
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(){
    this.modalRef = this.modalService.show(ModalDisclosureComponent, {class: 'modal-dialog-centered'});
  }

}
