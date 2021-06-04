import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-disclosure',
  templateUrl: './modal-disclosure.component.html',
  styleUrls: ['./modal-disclosure.component.css']
})
export class ModalDisclosureComponent implements OnInit {

  disclosure: any = new Object();

  subscription: Subscription = new Subscription();

  // Form
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(private modalRef: BsModalRef, private formBuilder: FormBuilder) { }

  get f() { return this.form.controls; }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  initForm(){
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      imageUrl: new FormControl(''),
      instagram: new FormControl(''),
      facebook: new FormControl('')
    });
  }

  onSubmit(){
    this.submitted = true;
    this.loading = true;
    if (this.form.invalid) { this.loading = false; return; }
    this.onClose();
    Swal.fire('Trampo Enviado', 'Seu projeto foi recebido com sucesso!', 'success');
    this.loading = false;
  }

  onClose(){
    this.modalRef.hide();
  }
}
