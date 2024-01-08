import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaObecnosciComponent } from './lista-obecnosci.component';

describe('ListaObecnosciComponent', () => {
  let component: ListaObecnosciComponent;
  let fixture: ComponentFixture<ListaObecnosciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaObecnosciComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaObecnosciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
