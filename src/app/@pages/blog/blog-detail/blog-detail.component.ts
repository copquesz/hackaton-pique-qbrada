import { BlogService } from './../../../@core/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  post: any;

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => this.findById(Number(param.id)));
  }

  findById(id: number){
    this.post =  this.blogService.findById(id);
  }

}
