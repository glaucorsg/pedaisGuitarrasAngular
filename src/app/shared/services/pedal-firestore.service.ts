import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Pedal} from "../model/pedal";
import {from, map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PedalFirestoreService {

  colecaoPedais: AngularFirestoreCollection<Pedal>;
  NOME_COLECAO_PEDAIS = 'pedais';

  constructor(private afs: AngularFirestore) {
    this.colecaoPedais = afs.collection(this.NOME_COLECAO_PEDAIS);
  }

  listar(): Observable<Pedal[]>{
    return this.colecaoPedais.valueChanges({idField: 'id'});
  }

  inserir(pedal: Pedal): Observable<Object>{
    delete pedal.id;
    return from(this.colecaoPedais.add(Object.assign({}, pedal)));
  }

  remover(id: string): Observable<void>{
    return from(this.colecaoPedais.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Pedal>{
    return this.colecaoPedais.doc(id).get().pipe(map(document =>
      new Pedal(document.id, document.data())));
  }

  atualizar(pedal: Pedal): Observable<void>{
    delete pedal.id;
    return from(this.colecaoPedais.doc(pedal.id).update(Object.assign({},pedal)));
  }

}
