import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TodoHistoryComponent } from './todo-history/todo-history.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo-list', component: TodoComponent},
  { path: 'todo-history', component: TodoHistoryComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutesModule { }
