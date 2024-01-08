import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajZolnierzaComponent } from './dodaj-zolnierza.component';

describe('DodajZolnierzaComponent', () => {
  let component: DodajZolnierzaComponent;
  let fixture: ComponentFixture<DodajZolnierzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DodajZolnierzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DodajZolnierzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
