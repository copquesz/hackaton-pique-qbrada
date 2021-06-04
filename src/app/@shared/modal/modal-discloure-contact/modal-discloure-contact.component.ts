import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-discloure-contact',
  templateUrl: './modal-discloure-contact.component.html',
  styleUrls: ['./modal-discloure-contact.component.css']
})
export class ModalDiscloureContactComponent implements OnInit {

  email: string;

  constructor(private modalRef: BsModalRef) { }

  ngOnInit() {
  }

  onClose(){
    this.modalRef.hide();
  }

}
