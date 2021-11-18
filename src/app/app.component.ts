import { Component } from '@angular/core';
import {Pedal} from "./shared/model/pedal";
import {Guitarra} from "./shared/model/guitarra";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pedais & Guitarras';
  pedal: Pedal;
  pedais: Array<Pedal>;

  guitarra: Guitarra;
  guitarras: Array<Guitarra>;

  constructor() {
    this.pedal = new Pedal();
    this.pedais = new Array<Pedal>();

    this.guitarra = new Guitarra();
    this.guitarras = new Array<Guitarra>();
  }

  inserirPedal(): void {
    this.pedais.push(this.pedal);
    this.pedal = new Pedal();
  }

  inserirGuitarra(): void {
    this.guitarras.push(this.guitarra);
    this.guitarra = new Guitarra();
  }
}
