import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MATERIAL_IMPORTS } from './material.imports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...MATERIAL_IMPORTS, ReactiveFormsModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('blogWeb');
}
