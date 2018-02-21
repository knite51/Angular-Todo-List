import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoHistoryComponent } from './todo-history.component';
import { AppRoutesModule } from '../app.routes.module';

const todoHistoryRoutes: Routes = [
  { path: '', component: TodoHistoryComponent }
];

@NgModule({
  imports: [
    AppRoutesModule,
    RouterModule.forChild(todoHistoryRoutes)
  ],
  exports: [RouterModule]
})

export class TodoHistoryRouteModule { }
