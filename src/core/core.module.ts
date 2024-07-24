import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreShellComponent} from "./core-shell/core-shell.component";
import {CoreRoutingModule} from "./core-routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CoreShellComponent
  ]
})
export class CoreModule { }
