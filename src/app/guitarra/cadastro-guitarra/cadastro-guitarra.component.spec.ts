import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGuitarraComponent } from './cadastro-guitarra.component';

describe('CadastroGuitarraComponent', () => {
  let component: CadastroGuitarraComponent;
  let fixture: ComponentFixture<CadastroGuitarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroGuitarraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroGuitarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
