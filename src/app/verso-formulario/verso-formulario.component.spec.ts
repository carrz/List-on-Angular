import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersoFormularioComponent } from './verso-formulario.component';

describe('VersoFormularioComponent', () => {
  let component: VersoFormularioComponent;
  let fixture: ComponentFixture<VersoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
