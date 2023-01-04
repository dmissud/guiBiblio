import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MaterialModule } from '../share/material/material.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [TopMenuComponent],
  exports: [TopMenuComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class BiblioModule {}
