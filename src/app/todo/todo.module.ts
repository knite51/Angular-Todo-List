import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { CommonModule } from '@angular/common';
import { TodoRouteModule } from './todo.routes.module';

@NgModule({
  declarations: [
    TodoComponent,
    TodoEditComponent,
    TodoEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRouteModule
  ]
})

export class TodoModule { }
