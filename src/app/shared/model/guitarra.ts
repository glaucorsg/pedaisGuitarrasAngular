export class Guitarra{
  id?: string;
  modelo?: string;
  marca?: string;
  preco?: number;
  descricao?: string;

  constructor(id?: string, guitarra: Guitarra = {} ){
    this.id = id;
    this.modelo = guitarra.modelo;
    this.marca = guitarra.marca;
    this.preco = guitarra.preco;
    this.descricao = guitarra.descricao;
  }
}
