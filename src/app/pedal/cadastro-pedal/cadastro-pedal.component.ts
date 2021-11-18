import { Component, OnInit } from '@angular/core';
import {Pedal} from "../../shared/model/pedal";

@Component({
  selector: 'app-cadastro-pedal',
  templateUrl: './cadastro-pedal.component.html',
  styleUrls: ['./cadastro-pedal.component.scss']
})
export class CadastroPedalComponent implements OnInit {

  pedal: Pedal;
  pedais: Array<Pedal>;

  constructor() {
    this.pedal = new Pedal();
    this.pedais = new Array<Pedal>();
  }

  ngOnInit(): void {
  }

  inserirPedal(): void {
    this.pedais.push(this.pedal);
    this.pedal = new Pedal();
  }


}
