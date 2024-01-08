import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmundorowanieComponent } from './umundorowanie.component';

describe('UmundorowanieComponent', () => {
  let component: UmundorowanieComponent;
  let fixture: ComponentFixture<UmundorowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmundorowanieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UmundorowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
