import { Component, OnInit } from '@angular/core';
import {Pedal} from "../../shared/model/pedal";
import {MatTableDataSource} from "@angular/material/table";
import {PedalService} from "../../shared/services/pedal.service";
import {Guitarra} from "../../shared/model/guitarra";

@Component({
  selector: 'app-listagem-pedal-tabela',
  templateUrl: './listagem-pedal-tabela.component.html',
  styleUrls: ['./listagem-pedal-tabela.component.scss']
})
export class ListagemPedalTabelaComponent implements OnInit {

  dataSource!: MatTableDataSource<Pedal>;
  // pedais!: Array<Pedal>;
  mostrarColunas = ['modelo', 'marca', 'ano', 'preco', 'acoes'];



  constructor(private pedalservice: PedalService) { }

  ngOnInit(): void {
    this.pedalservice.listarPedais().subscribe(
      pedais => this.dataSource = new MatTableDataSource<Pedal>(pedais)
    );
  }

  filtrar(value: string):void {
    this.dataSource.filter = value.trim().toLowerCase();

  }

  apagar(id: number): void {
    this.pedalservice.removerPedal(id).subscribe(
      apagado => {
        const indx = this.dataSource.data.findIndex(pedal => pedal.id === id);
        if (indx > -1) {
          this.dataSource.data.splice(indx, 1);
          this.dataSource = new MatTableDataSource<Pedal>(this.dataSource.data)
        }
      }
    )
  }
}
