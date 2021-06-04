import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

// Components

const routes: Routes = [

  {
    path: '',
    component: BlogComponent
  },
  {
    path: ':id',
    component: BlogDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
