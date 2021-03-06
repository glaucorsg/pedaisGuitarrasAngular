import { Component, OnInit } from '@angular/core';
import {Pedal} from "../../shared/model/pedal";
import {PedalService} from "../../shared/services/pedal.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PedalFirestoreService} from "../../shared/services/pedal-firestore.service";

@Component({
  selector: 'app-cadastro-pedal',
  templateUrl: './cadastro-pedal.component.html',
  styleUrls: ['./cadastro-pedal.component.scss']
})
export class CadastroPedalComponent implements OnInit {

  pedal: Pedal;

  operacaoCadastro = true;

  constructor(private pedalservice: PedalFirestoreService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.pedal = new Pedal();
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = String(this.rotaAtual.snapshot.paramMap.get('id'));
      //Pegando no banco o item com id = idParaEdicao
      this.pedalservice.pesquisarPorId(idParaEdicao).subscribe(
        pedalRetornado => this.pedal = pedalRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirPedal(): void {
    if (this.pedal.id) {
      this.pedalservice.atualizar(this.pedal).subscribe(
        pedalAlterado => {
          console.log(pedalAlterado);
          this.roteador.navigate(['listarpedais']);
        }
    );
    } else {
      this.pedalservice.inserir(this.pedal).subscribe(
        pedalInserido => {
          console.log(pedalInserido);
          this.roteador.navigate(['listarpedais']);
        }
    );
    }
  }
}

