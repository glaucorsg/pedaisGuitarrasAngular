import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {LayoutModule} from "./layout/layout.module";
import {FlexModule} from "@angular/flex-layout";
import {GuitarraModule} from "./guitarra/guitarra.module";
import {PedalModule} from "./pedal/pedal.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FirestoreModule} from "./firestore/firestore.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    LayoutModule,
    FlexModule,
    GuitarraModule,
    PedalModule,
    RouterModule,
    HttpClientModule,
    FirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
