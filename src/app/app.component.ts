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

  guitarra: Guitarra;
  guitarras: Array<Guitarra>;

  constructor() {


    this.guitarra = new Guitarra();
    this.guitarras = new Array<Guitarra>();
  }



  inserirGuitarra(): void {
    this.guitarras.push(this.guitarra);
    this.guitarra = new Guitarra();
  }
}
