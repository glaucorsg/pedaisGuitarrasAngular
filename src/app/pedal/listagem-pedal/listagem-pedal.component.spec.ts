import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPedalComponent } from './listagem-pedal.component';

describe('ListagemPedalComponent', () => {
  let component: ListagemPedalComponent;
  let fixture: ComponentFixture<ListagemPedalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPedalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPedalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
