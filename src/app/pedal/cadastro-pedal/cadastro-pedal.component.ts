import { Component, OnInit } from '@angular/core';
import {Pedal} from "../../shared/model/pedal";
import {PedalService} from "../../shared/services/pedal.service";

@Component({
  selector: 'app-cadastro-pedal',
  templateUrl: './cadastro-pedal.component.html',
  styleUrls: ['./cadastro-pedal.component.scss']
})
export class CadastroPedalComponent implements OnInit {

  pedal: Pedal;

  constructor(private pedalservice: PedalService) {
    this.pedal = new Pedal();
  }

  ngOnInit(): void {
  }

  inserirPedal(): void {
    this.pedalservice.inserirPedal(this.pedal).subscribe(
      pedal => console.log(pedal)
    );
    this.pedal = new Pedal();
  }
}
