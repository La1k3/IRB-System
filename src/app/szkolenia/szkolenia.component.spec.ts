import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzkoleniaComponent } from './szkolenia.component';

describe('SzkoleniaComponent', () => {
  let component: SzkoleniaComponent;
  let fixture: ComponentFixture<SzkoleniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SzkoleniaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SzkoleniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
