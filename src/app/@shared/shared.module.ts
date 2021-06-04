import { ModalDisclosureComponent } from './modal/modal-disclosure/modal-disclosure.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

// Third
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    TabsModule.forRoot(), ModalModule.forRoot()
  ],
  declarations: [
    HeaderComponent, FooterComponent,
    ModalDisclosureComponent
  ],
  exports: [
    HeaderComponent, FooterComponent,
    FormsModule, ReactiveFormsModule,
    TabsModule
  ]
})
export class SharedModule { }
