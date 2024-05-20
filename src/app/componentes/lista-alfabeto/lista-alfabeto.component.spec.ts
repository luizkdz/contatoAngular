import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlfabetoComponent } from './lista-alfabeto.component';

describe('ListaAlfabetoComponent', () => {
  let component: ListaAlfabetoComponent;
  let fixture: ComponentFixture<ListaAlfabetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAlfabetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaAlfabetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
