import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';

import { AppRoutesModule } from './app.routes.module';
import { CoreModule } from './core/core.module';
import { TodoModule } from './todo/todo.module';
import { TodoHistoryModule } from './todo-history/todo-history.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    CoreModule,
    TodoModule,
    TodoHistoryModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
