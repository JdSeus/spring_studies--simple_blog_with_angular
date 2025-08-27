import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MATERIAL_IMPORTS } from 'app/material.imports';

@Component({
  selector: 'app-create-post',
  imports: [
    ...MATERIAL_IMPORTS,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-post.html',
  styleUrl: './create-post.scss'
})
export class CreatePost {

  postForm!: FormGroup;

  tags:string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {};

  ngOnInit() {
    this.postForm = this.fb.group({
      name: [null, Validators.required],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      img: [null, Validators.required],
      postedBy: [null, Validators.required],
    });
  }

  add(event: any) {
    const value = event.value || ''.trim();
    if(value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }

  remove(tag: any) {
    const index = this.tags.indexOf(tag);

    if(index >= 0) {
      this.tags.splice(index, 1);
    }
  }

}
