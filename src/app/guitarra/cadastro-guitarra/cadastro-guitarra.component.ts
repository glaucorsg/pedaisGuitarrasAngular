import { Component, OnInit } from '@angular/core';
import {Guitarra} from "../../shared/model/guitarra";
import {GuitarraService} from "../../shared/services/guitarra.service";


@Component({
  selector: 'app-cadastro-guitarra',
  templateUrl: './cadastro-guitarra.component.html',
  styleUrls: ['./cadastro-guitarra.component.scss']
})
export class CadastroGuitarraComponent implements OnInit {

  guitarra: Guitarra;

  constructor(private guitarraservice: GuitarraService) {
    this.guitarra = new Guitarra();
  }

  ngOnInit(): void {
  }

  inserirGuitarra(): void {
    this.guitarraservice.inserirGuitarra(this.guitarra).subscribe(
      guitarra => console.log(guitarra)
    );
    this.guitarra = new Guitarra();
  }
}


