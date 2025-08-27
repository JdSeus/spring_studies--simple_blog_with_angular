import { Routes } from '@angular/router';
import { CreatePost } from './pages/create-post/create-post';
import { ViewAll } from './pages/view-all/view-all';
import { ViewPost } from './pages/view-post/view-post';

export const routes: Routes = [
    { path: 'create-post', component: CreatePost },
    { path: 'view-all', component: ViewAll },
    { path: 'view-post/:id', component: ViewPost },
];
