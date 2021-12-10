import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {GuitarraService} from "../../shared/services/guitarra.service";
import {Guitarra} from "../../shared/model/guitarra";

@Component({
  selector: 'app-listagem-guitarra-tabela',
  templateUrl: './listagem-guitarra-tabela.component.html',
  styleUrls: ['./listagem-guitarra-tabela.component.scss']
})
export class ListagemGuitarraTabelaComponent implements OnInit {

  dataSource!: MatTableDataSource<Guitarra>;
  // guitarras!: Array<Guitarra>;
  mostrarColunas = ['modelo', 'marca', 'ano', 'preco', 'acoes'];


  constructor(private guitarraservice: GuitarraService) {
  }

  ngOnInit(): void {
    this.guitarraservice.listarGuitarras().subscribe(
      guitarras => this.dataSource = new MatTableDataSource<Guitarra>(guitarras)
    )
  }

  filtrar(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  apagar(id: number): void {
    this.guitarraservice.removerGuitarra(id).subscribe(
      apagado => {
        const indx = this.dataSource.data.findIndex(guitarra => guitarra.id === id);
        if(indx > -1){
          this.dataSource.data.splice(indx,1);
          this.dataSource = new MatTableDataSource<Guitarra>(this.dataSource.data);
        }
      }
    )
  }
}
