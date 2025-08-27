import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'app/service/post-service';
import { MATERIAL_IMPORTS } from 'app/material.imports';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommentService } from 'app/service/comment-service';

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

  commentForm!: FormGroup;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private fb: FormBuilder,
    private commentService: CommentService
  ){
    this.postId = this.activatedRoute.snapshot.params['id'];
    this.commentForm = this.fb.group({
      postedBy: [null, Validators.required],
      content: [null, Validators.required],
    });
  }

  ngOnInit() {
    console.log(this.postId);
    this.getPostById();
  }

  publishComment() {
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;

    this.commentService.createComment(this.postId, postedBy, content).subscribe(res => {
      this.matSnackBar.open("Comment Published Succesfully!", "Ok");
    }, error => {
      this.matSnackBar.open("Something went Wrong!", "Ok");
    });
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
