import { Component, OnInit } from '@angular/core';
import {Guitarra} from "../../shared/model/guitarra";
import {GUITARRAS} from "../../shared/model/GUITARRAS";

@Component({
  selector: 'app-cadastro-guitarra',
  templateUrl: './cadastro-guitarra.component.html',
  styleUrls: ['./cadastro-guitarra.component.scss']
})
export class CadastroGuitarraComponent implements OnInit {

  guitarra: Guitarra;
  guitarras: Array<Guitarra>;

  constructor() {
    this.guitarra = new Guitarra();
    //this.guitarras = new Array<Guitarra>();
    this.guitarras = GUITARRAS;
  }

  ngOnInit(): void {
  }

  inserirGuitarra(): void {
    this.guitarras.push(this.guitarra);
    this.guitarra = new Guitarra();
  }

}
