import { Component, OnInit } from '@angular/core';
import {PEDAIS} from "../../shared/model/PEDAIS";
import {Pedal} from "../../shared/model/pedal";
import {Guitarra} from "../../shared/model/guitarra";

@Component({
  selector: 'app-listagem-pedal',
  templateUrl: './listagem-pedal.component.html',
  styleUrls: ['./listagem-pedal.component.scss']
})
export class ListagemPedalComponent implements OnInit {

  // pedais = [
  //   {modelo: 'TS808 Tube Screamer', marca: 'Ibanez', preco: '179.99', descricao: 'Often imitated but never duplicated, our TS808 Tube screamer very well may have spawned more off-shoots and variations than any other pedal on the market. Now you can own the faithful reissue of this world-famous stomp box at a price that doesn\'t break the bank. The reissue includes the same JRC4558D IC chip and analog circuitry as the original, and features traditional overdrive, level, and tone controls.'},
  //   {modelo: 'DD-7 Digital Delay', marca: 'Boss', preco: '159.99', descricao: 'This compact pedal provides a digital delay effect with outstanding quality equivalent to that of a dedicated rackmount delay unit, all with simple stompbox-style control.'}
  // ]

  pedais = PEDAIS;

  constructor() {
  }

  ngOnInit(): void {
  }

  deletar(pedal: Pedal): void {
    const indxPedalARemover = this.pedais.findIndex(p => p.modelo === pedal.modelo);
    if (indxPedalARemover > -1) {
      this.pedais.splice(indxPedalARemover, 1);
    }
  }
}
