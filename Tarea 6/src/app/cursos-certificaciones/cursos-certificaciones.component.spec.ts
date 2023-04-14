import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCertificacionesComponent } from './cursos-certificaciones.component';

describe('CursosCertificacionesComponent', () => {
  let component: CursosCertificacionesComponent;
  let fixture: ComponentFixture<CursosCertificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCertificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosCertificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
