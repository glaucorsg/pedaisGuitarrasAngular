import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-guitarra',
  templateUrl: './listagem-guitarra.component.html',
  styleUrls: ['./listagem-guitarra.component.scss']
})
export class ListagemGuitarraComponent implements OnInit {

  guitarras = [
    {modelo: 'Les Paul Junior Vintage Tobacco Burst', marca: 'Gibson', preco: 1559, descricao: 'The Les Paul Junior returns to the classic design that made it relevant, played and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson\'s Golden Era of innovation and brings authenticity back to life. Introduced as an affordable option for students and beginners in 1954, the Les Paul Junior has been embraced by musicians for over 60 years. The single cutaway slab mahogany body, single dogear P-90 pickup, single volume and tone controls all add up to a whole lot of guitar which is greater than the sum of its parts. The fat 50\'s-style neck profile and wraparound bridge add to the equation for rock solid tone. Available in Tobacco Burst and the new Ebony finish with tortoise shell pickguard.'},
    {modelo: 'American Professional II Telecaster', marca: 'Fender', preco: 1029.99, descricao: 'The American Professional II Telecaster® draws from more than seventy years of innovation, inspiration and evolution to meet the demands of today’s working player. Our popular Deep "C” neck now sports smooth rolled fingerboard edges, a “Super-Natural” satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register. New V-Mod II Telecaster single-coil pickups are more articulate than ever while delivering the twang, snap and snarl that made the Tele famous. The new top-load/string-through bridge with compensated “bullet” saddles is our most comfortable, flexible Tele bridge yet – retaining classic brass-saddle tone and providing excellent intonation and flexible setup options, allowing you to tailor the tension and tone of each string to your liking. The American Pro II Telecaster delivers instant familiarity and sonic versatility you’ll feel and hear right away, with broad ranging improvements that add up to nothing less than a new standard for professional instruments.'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
