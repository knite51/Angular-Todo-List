import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { AppRoutesModule } from '../app.routes.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutesModule,
    SharedModule
  ],
  exports: [AppRoutesModule, HeaderComponent ]
})

export class CoreModule { }
