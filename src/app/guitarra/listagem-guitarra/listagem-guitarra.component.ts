import { Component, OnInit } from '@angular/core';
import {Guitarra} from "../../shared/model/guitarra";
import {GuitarraService} from "../../shared/services/guitarra.service";
import {Pedal} from "../../shared/model/pedal";
import {Router} from "@angular/router";
import {GuitarraFirestoreService} from "../../shared/services/guitarra-firestore.service";

@Component({
  selector: 'app-listagem-guitarra',
  templateUrl: './listagem-guitarra.component.html',
  styleUrls: ['./listagem-guitarra.component.scss']
})
export class ListagemGuitarraComponent implements OnInit {

  guitarras!: Array<Guitarra>;

  constructor(private guitarraService: GuitarraFirestoreService, private roteador: Router) { }

  ngOnInit(): void {
    this.guitarraService.listar().subscribe(
      guitarras => this.guitarras = guitarras
    );
  }

  editar(guitarra: Guitarra): void{
    this.roteador.navigate(['cadastrarguitarra', guitarra.id]);
  }

  remover(guitarra: Guitarra):void {
    this.guitarraService.remover(String(guitarra.id)).subscribe(
      resposta => {
        const indxGuitarraARemover = this.guitarras.findIndex(g => g.modelo === guitarra.modelo);
        if(indxGuitarraARemover > -1){
          this.guitarras.splice(indxGuitarraARemover, 1);
        }
      }
    );
  }
}

