import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemGuitarraComponent } from './listagem-guitarra.component';

describe('ListagemGuitarraComponent', () => {
  let component: ListagemGuitarraComponent;
  let fixture: ComponentFixture<ListagemGuitarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemGuitarraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemGuitarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
