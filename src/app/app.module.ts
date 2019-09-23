import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { SegundoComponent } from './segundo/segundo.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeroComponent } from './primero/primero.component';

@NgModule({
  declarations: [
    AppComponent,
    SegundoComponent,
    PrimeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
