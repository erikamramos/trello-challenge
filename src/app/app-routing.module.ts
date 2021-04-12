import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

import { HomeComponent } from "./pages/home/home.component";
import { BoardComponent } from "./pages/board/board.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'board/:id',
    component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
