import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import { CoreModule } from '@/core';
import { FirebaseModule } from '@/import';
import { SharedModule } from '@/shared';
import { HomeComponent, Error404Component } from '@/routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FirebaseModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
