import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'app/service/post-service';
import { MATERIAL_IMPORTS } from 'app/material.imports';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-by-name',
  imports: [
    ...MATERIAL_IMPORTS,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './search-by-name.html',
  styleUrl: './search-by-name.scss'
})
export class SearchByName {

  result: any = [];
  name: any = [];

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar
  ){}

  searchByName() {
    this.postService.searchByName(this.name).subscribe(res => {
      this.result = res;
      console.log(res);
    }, error => {
      this.snackBar.open("Something went Wrong!", "Ok");
    });
  }

}
