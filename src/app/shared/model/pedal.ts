export class Pedal {
  id?: string;
  modelo?: string;
  marca?: string;
  preco?: number;
  descricao?: string;

  constructor(id?: string, pedal: Pedal = {} ){
    this.id = id;
    this.modelo = pedal.modelo;
    this.marca = pedal.marca;
    this.preco = pedal.preco;
    this.descricao = pedal.descricao;
  }
}


// }
