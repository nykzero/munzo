
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MnFullpageModule } from 'ngx-fullpage';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
      AppComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
