import { BlogService } from './../../@core/services/blog.service';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from './../../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    BlogRoutingModule,
    SharedModule,
    CommonModule
  ],
  declarations: [BlogComponent, BlogDetailComponent],
  providers: [BlogService]
})
export class BlogModule { }
