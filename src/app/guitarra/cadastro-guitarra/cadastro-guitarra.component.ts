import { Component, OnInit } from '@angular/core';
import {Guitarra} from "../../shared/model/guitarra";
import {GuitarraService} from "../../shared/services/guitarra.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PedalService} from "../../shared/services/pedal.service";
import {Pedal} from "../../shared/model/pedal";


@Component({
  selector: 'app-cadastro-guitarra',
  templateUrl: './cadastro-guitarra.component.html',
  styleUrls: ['./cadastro-guitarra.component.scss']
})
export class CadastroGuitarraComponent implements OnInit {

  guitarra: Guitarra;

  operacaoCadastro = true;

  constructor(private guitarraservice: GuitarraService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.guitarra = new Guitarra();
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      //Pegando no banco o item com id = idParaEdicao
      this.guitarraservice.pesquisarPorId(idParaEdicao).subscribe(
        guitarraRetornada => this.guitarra = guitarraRetornada
      );
    }
  }



  ngOnInit(): void {
  }

  inserirGuitarra(): void {
    if (this.guitarra.id) {
      this.guitarraservice.atualizarGuitarra(this.guitarra).subscribe(
        guitarraAlterada => {
          console.log(guitarraAlterada);
          this.roteador.navigate(['listarguitarras']);
        }
      );
    } else {
      this.guitarraservice.inserirGuitarra(this.guitarra).subscribe(
        guitarraInserida => {
          console.log(guitarraInserida);
          this.roteador.navigate(['listarguitarras']);
        }
      );
    }
  }
}


