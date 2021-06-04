import { BlogService } from './../../@core/services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  post: Array<any>

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.post = this.blogService.findAll();
  }

}
