import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ name: 'guiBiblio',maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
