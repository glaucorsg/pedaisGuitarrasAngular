import { Component, OnInit } from '@angular/core';
import {Pedal} from "../../shared/model/pedal";
import {PedalService} from "../../shared/services/pedal.service";


@Component({
  selector: 'app-listagem-pedal',
  templateUrl: './listagem-pedal.component.html',
  styleUrls: ['./listagem-pedal.component.scss']
})
export class ListagemPedalComponent implements OnInit {

  pedais!: Array<Pedal>;

  constructor(private pedalService: PedalService) {
  }

  ngOnInit(): void {
    this.pedalService.listarPedais().subscribe(
      pedais => this.pedais = pedais
    );
  }

  deletar(pedal: Pedal): void {
    const indxPedalARemover = this.pedais.findIndex(p => p.modelo === pedal.modelo);
    if (indxPedalARemover > -1) {
      this.pedais.splice(indxPedalARemover, 1);
    }
  }
}
