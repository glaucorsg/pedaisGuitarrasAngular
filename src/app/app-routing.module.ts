import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroPedalComponent} from "./pedal/cadastro-pedal/cadastro-pedal.component";
import {CadastroGuitarraComponent} from "./guitarra/cadastro-guitarra/cadastro-guitarra.component";
import {ListagemPedalComponent} from "./pedal/listagem-pedal/listagem-pedal.component";
import {ListagemGuitarraComponent} from "./guitarra/listagem-guitarra/listagem-guitarra.component";
import {ListagemPedalTabelaComponent} from "./pedal/listagem-pedal-tabela/listagem-pedal-tabela.component";
import {ListagemGuitarraTabelaComponent} from "./guitarra/listagem-guitarra-tabela/listagem-guitarra-tabela.component";

const routes: Routes = [
  {
    path: 'cadastrarpedal',
    component: CadastroPedalComponent
  },
  {
    path: 'cadastrarpedal/:id',
    component: CadastroPedalComponent
  },
  {
    path: 'cadastrarguitarra',
    component: CadastroGuitarraComponent
  },
  {
    path: 'cadastrarguitarra/:id',
    component: CadastroGuitarraComponent
  },
  {
    path: 'listarpedais',
    component: ListagemPedalComponent
  },
  {
    path: 'listartabelapedais',
    component: ListagemPedalTabelaComponent
  },
  {
    path: 'listarguitarras',
    component: ListagemGuitarraComponent
  },
  {
    path: 'listartabelaguitarras',
    component: ListagemGuitarraTabelaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
