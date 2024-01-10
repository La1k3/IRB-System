import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruktazComponent } from './instruktaz.component';

describe('InstruktazComponent', () => {
  let component: InstruktazComponent;
  let fixture: ComponentFixture<InstruktazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruktazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruktazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
