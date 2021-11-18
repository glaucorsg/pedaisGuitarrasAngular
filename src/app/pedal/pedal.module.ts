import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPedalComponent } from './cadastro-pedal/cadastro-pedal.component';
import { ListagemPedalComponent } from './listagem-pedal/listagem-pedal.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
    declarations: [
        CadastroPedalComponent,
        ListagemPedalComponent
    ],
  exports: [
    ListagemPedalComponent,
    CadastroPedalComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ]
})
export class PedalModule { }
