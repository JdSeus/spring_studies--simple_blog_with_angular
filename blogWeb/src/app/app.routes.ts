import { Routes } from '@angular/router';
import { CreatePost } from './pages/create-post/create-post';
import { ViewAll } from './pages/view-all/view-all';

export const routes: Routes = [
    { path: 'create-post', component: CreatePost },
    { path: 'view-all', component: ViewAll }
];
