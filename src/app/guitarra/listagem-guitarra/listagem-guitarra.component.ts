import { Component, OnInit } from '@angular/core';
import {Guitarra} from "../../shared/model/guitarra";
import {GuitarraService} from "../../shared/services/guitarra.service";

@Component({
  selector: 'app-listagem-guitarra',
  templateUrl: './listagem-guitarra.component.html',
  styleUrls: ['./listagem-guitarra.component.scss']
})
export class ListagemGuitarraComponent implements OnInit {

  guitarras!: Array<Guitarra>;

  constructor(private guitarraService: GuitarraService) { }

  ngOnInit(): void {
    this.guitarraService.listarGuitarras().subscribe(
      guitarras => this.guitarras = guitarras
    );
  }

  deletar(guitarra: Guitarra):void {
    const indxGuitarraARemover = this.guitarras.findIndex(g => g.modelo === guitarra.modelo);
    if(indxGuitarraARemover > -1){
      this.guitarras.splice(indxGuitarraARemover, 1);
    }
  }
}
