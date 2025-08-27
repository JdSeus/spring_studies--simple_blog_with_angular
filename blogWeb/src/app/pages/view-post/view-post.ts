import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'app/service/post-service';
import { MATERIAL_IMPORTS } from 'app/material.imports';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-post',
      imports: [
    ...MATERIAL_IMPORTS,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './view-post.html',
  styleUrl: './view-post.scss'
})
export class ViewPost {

  postId: any;
  postData: any;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar
  ){
    this.postId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    console.log(this.postId);
    this.getPostById();
  }

  getPostById() {
    this.postService.getPostById(this.postId).subscribe(res => {
      this.postData = res;
      console.log(res);
    }, error => {
      this.matSnackBar.open("Something went Wrong!", "Ok");
    });
  }

  likePost() {
    this.postService.likePost(this.postId).subscribe(res => {
      this.matSnackBar.open("Post Liked Successfully!", "Ok");
      this.getPostById();
    }, error => {
      this.matSnackBar.open("Something went Wrong!", "Ok");
    });
  }

}
