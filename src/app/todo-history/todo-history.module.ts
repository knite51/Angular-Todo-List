import { NgModule } from '@angular/core';
import { TodoHistoryComponent } from './todo-history.component';
import { CommonModule } from '@angular/common';
import { TodoHistoryRouteModule } from './todo-history.routes.module';

@NgModule({
  declarations: [
    TodoHistoryComponent
  ],
  imports: [
    CommonModule,
    TodoHistoryRouteModule
  ]
})

export class TodoHistoryModule { }
