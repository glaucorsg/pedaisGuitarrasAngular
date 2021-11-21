import { Injectable } from '@angular/core';
import {GUITARRAS} from "../model/GUITARRAS";
import {Guitarra} from "../model/guitarra";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


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
}
