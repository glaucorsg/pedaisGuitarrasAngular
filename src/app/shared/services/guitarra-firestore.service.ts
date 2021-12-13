import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Guitarra} from "../model/guitarra";
import {from, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuitarraFirestoreService {

  colecaoGuitarras: AngularFirestoreCollection<Guitarra>;
  NOME_COLECAO_GUITARRAS = 'guitarras';

  constructor(private afs: AngularFirestore) {
    this.colecaoGuitarras = afs.collection(this.NOME_COLECAO_GUITARRAS);
  }

  listar(): Observable<Guitarra[]>{
    return this.colecaoGuitarras.valueChanges({idField: 'id'});
  }

  inserir(guitarra: Guitarra): Observable<Object>{
    delete guitarra.id;
    return from(this.colecaoGuitarras.add(Object.assign({}, guitarra)));
  }

  remover(id: string): Observable<void>{
    return from(this.colecaoGuitarras.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Guitarra>{
    return this.colecaoGuitarras.doc(id).get().pipe(map(document =>
      new Guitarra(document.id, document.data())));
  }

  atualizar(guitarra: Guitarra): Observable<void>{
    delete guitarra.id;
    return from(this.colecaoGuitarras.doc(guitarra.id).update(Object.assign({},guitarra)));
  }



}
