import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataProviderShellComponent} from "./data-provider-shell/data-provider-shell.component";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from '../share/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from "@ngrx/store";
import {DataFamilyComponent} from './data-family/data-family.component';
import {dataProviderReducer} from "./state/data-provider.reducer";

@NgModule({
  declarations: [DataProviderShellComponent, DataFamilyComponent],
  exports: [DataProviderShellComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('data-provider', dataProviderReducer)
  ]
})
export class DataProviderModule {
}
