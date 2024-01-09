import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyprowiantowanieComponent } from './wyprowiantowanie.component';

describe('WyprowiantowanieComponent', () => {
  let component: WyprowiantowanieComponent;
  let fixture: ComponentFixture<WyprowiantowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WyprowiantowanieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WyprowiantowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
