import { ModalDisclosureComponent } from './../../../@shared/modal/modal-disclosure/modal-disclosure.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-banner-hero',
  templateUrl: './banner-hero.component.html',
  styleUrls: ['./banner-hero.component.css']
})
export class BannerHeroComponent implements OnInit {

  // Modal
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(){
    this.modalRef = this.modalService.show(ModalDisclosureComponent, {class: 'modal-dialog-centered'});
  }

}
