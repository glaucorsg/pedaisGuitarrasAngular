import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPedalComponent } from './cadastro-pedal.component';

describe('CadastroPedalComponent', () => {
  let component: CadastroPedalComponent;
  let fixture: ComponentFixture<CadastroPedalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPedalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPedalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
