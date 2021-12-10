import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemGuitarraTabelaComponent } from './listagem-guitarra-tabela.component';

describe('ListagemGuitarraTabelaComponent', () => {
  let component: ListagemGuitarraTabelaComponent;
  let fixture: ComponentFixture<ListagemGuitarraTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemGuitarraTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemGuitarraTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
