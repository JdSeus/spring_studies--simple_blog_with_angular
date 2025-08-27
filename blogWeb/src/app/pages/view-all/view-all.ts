import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'app/service/post-service';
import { MATERIAL_IMPORTS } from 'app/material.imports';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-all',
    imports: [
    ...MATERIAL_IMPORTS,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './view-all.html',
  styleUrl: './view-all.scss'
})
export class ViewAll {

  allPosts:any;

  constructor(
    private postService: PostService, 
    private snackBar: MatSnackBar
  ){}

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(res => {
      console.log(res);
      this.allPosts = res;
    }, error => {
      this.snackBar.open("Something went Wrong!", "Ok");
    });
  }

}
