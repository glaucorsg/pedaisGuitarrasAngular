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

  removerPedal(id: number): Observable<object>{
    return this.httpClient.delete(`${this.URL_PEDAIS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Pedal> {
    return this.httpClient.get<Pedal>(`${this.URL_PEDAIS}/${id}`);
  }

  atualizarPedal(pedal: Pedal): Observable<Pedal>{
    return this.httpClient.put<Pedal>(`${this.URL_PEDAIS}/${pedal.id}`,pedal);
  }
}
