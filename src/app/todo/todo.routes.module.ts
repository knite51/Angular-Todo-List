import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { AppRoutesModule } from '../app.routes.module';

const todoRoutes: Routes = [
  { path: '', component: TodoComponent }
]

@NgModule({
  imports: [
    AppRoutesModule,
    RouterModule.forChild(todoRoutes)
  ],
  exports: [ RouterModule ]
})

export class TodoRouteModule { }
