import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BiblioModule} from './biblio/biblio.module';
import {DataProviderModule} from "./data-provider/data-provider.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BiblioModule,
    DataProviderModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
