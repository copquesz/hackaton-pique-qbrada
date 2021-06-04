import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisclosuresComponent } from './disclosures.component';

// Components

const routes: Routes = [

  {
    path: '',
  },
  {
    path: ':id',
    component: DisclosuresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisclosuresRoutingModule {}
