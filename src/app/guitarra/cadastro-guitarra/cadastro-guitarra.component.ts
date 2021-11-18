import { Component, OnInit } from '@angular/core';
import {Guitarra} from "../../shared/model/guitarra";

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
    this.guitarras = new Array<Guitarra>();
  }

  ngOnInit(): void {
  }

  inserirGuitarra(): void {
    this.guitarras.push(this.guitarra);
    this.guitarra = new Guitarra();
  }

}
