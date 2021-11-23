import { Component, OnInit } from '@angular/core';
import {Pedal} from "../../shared/model/pedal";
import {PedalService} from "../../shared/services/pedal.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-listagem-pedal',
  templateUrl: './listagem-pedal.component.html',
  styleUrls: ['./listagem-pedal.component.scss']
})
export class ListagemPedalComponent implements OnInit {

  pedais!: Array<Pedal>;

  constructor(private pedalService: PedalService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.pedalService.listarPedais().subscribe(
      pedais => this.pedais = pedais
    );
  }

  editar(pedal: Pedal): void{
    this.roteador.navigate(['cadastrarpedal', pedal.id]);
  }

  remover(pedal: Pedal): void {
    this.pedalService.removerPedal(pedal.id).subscribe(
      resposta => {
        const indxPedalARemover = this.pedais.findIndex(p => p.modelo === pedal.modelo);
        if (indxPedalARemover > -1) {
          this.pedais.splice(indxPedalARemover, 1);
        }
      }
    );
  }
}
