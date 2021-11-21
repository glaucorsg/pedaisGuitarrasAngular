import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroPedalComponent} from "./pedal/cadastro-pedal/cadastro-pedal.component";
import {CadastroGuitarraComponent} from "./guitarra/cadastro-guitarra/cadastro-guitarra.component";
import {ListagemPedalComponent} from "./pedal/listagem-pedal/listagem-pedal.component";
import {ListagemGuitarraComponent} from "./guitarra/listagem-guitarra/listagem-guitarra.component";

const routes: Routes = [
  {
    path: 'cadastrarpedal',
    component: CadastroPedalComponent
  },
  {
    path: 'cadastrarguitarra',
    component: CadastroGuitarraComponent
  },
  {
    path: 'listarpedais',
    component: ListagemPedalComponent
  },
  {
    path: 'listarguitarras',
    component: ListagemGuitarraComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
