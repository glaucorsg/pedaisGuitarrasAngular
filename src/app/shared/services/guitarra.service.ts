import { Injectable } from '@angular/core';
import {GUITARRAS} from "../model/GUITARRAS";
import {Guitarra} from "../model/guitarra";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pedal} from "../model/pedal";


@Injectable({
  providedIn: 'root'
})
export class GuitarraService {

  URL_GUITARRAS = 'http://localhost:3000/guitarras';

  constructor(private httpClient: HttpClient) {
  }

  listarGuitarras(): Observable<Guitarra[]>{
    return this.httpClient.get<Guitarra[]>(this.URL_GUITARRAS);
  }

  inserirGuitarra(guitarra: Guitarra): Observable<Guitarra>{
    //Inserir regra para evitar duplicidade no cadastro
    return this.httpClient.post<Guitarra>(this.URL_GUITARRAS, guitarra);
  }

  removerGuitarra(id: number): Observable<object>{
    return this.httpClient.delete(`${this.URL_GUITARRAS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Guitarra> {
    return this.httpClient.get<Guitarra>(`${this.URL_GUITARRAS}/${id}`);
  }

  atualizarGuitarra(guitarra: Guitarra): Observable<Guitarra>{
    return this.httpClient.put<Guitarra>(`${this.URL_GUITARRAS}/${guitarra.id}`,guitarra);
  }

}
