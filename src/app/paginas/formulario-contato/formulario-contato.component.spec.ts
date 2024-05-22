import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContatoComponent } from './formulario-contato.component';
import { RouterLink } from '@angular/router';

describe('FormularioContatoComponent', () => {
  let component: FormularioContatoComponent;
  let fixture: ComponentFixture<FormularioContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioContatoComponent,RouterLink]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
