import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPedalTabelaComponent } from './listagem-pedal-tabela.component';

describe('ListagemPedalTabelaComponent', () => {
  let component: ListagemPedalTabelaComponent;
  let fixture: ComponentFixture<ListagemPedalTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPedalTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPedalTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
