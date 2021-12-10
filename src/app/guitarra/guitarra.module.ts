import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroGuitarraComponent } from './cadastro-guitarra/cadastro-guitarra.component';
import { ListagemGuitarraComponent } from './listagem-guitarra/listagem-guitarra.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexModule} from "@angular/flex-layout";
import { ListagemGuitarraTabelaComponent } from './listagem-guitarra-tabela/listagem-guitarra-tabela.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
    declarations: [
        CadastroGuitarraComponent,
        ListagemGuitarraComponent,
        ListagemGuitarraTabelaComponent
    ],
  exports: [
    CadastroGuitarraComponent,
    ListagemGuitarraComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FlexModule,
    MatTableModule
  ]
})
export class GuitarraModule { }
