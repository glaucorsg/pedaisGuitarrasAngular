import { Injectable } from '@angular/core';
import {PEDAIS} from "../model/PEDAIS";
import {Pedal} from "../model/pedal";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PedalService {

  URL_PEDAIS = 'http://localhost:3000/pedais';

  constructor(private httpClient: HttpClient) {
  }

  listarPedais(): Observable<Pedal[]>{
    return this.httpClient.get<Pedal[]>(this.URL_PEDAIS);
  }

  inserirPedal(pedal: Pedal): Observable<Pedal> {
    //Inserir regra para evitar duplicidade no cadastro
    return this.httpClient.post<Pedal>(this.URL_PEDAIS, pedal);
  }
}
