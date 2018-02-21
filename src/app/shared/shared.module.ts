import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directives';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    DropdownDirective
  ]
})

export class SharedModule { }
