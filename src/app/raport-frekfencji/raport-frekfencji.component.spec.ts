import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportFrekfencjiComponent } from './raport-frekfencji.component';

describe('RaportFrekfencjiComponent', () => {
  let component: RaportFrekfencjiComponent;
  let fixture: ComponentFixture<RaportFrekfencjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaportFrekfencjiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaportFrekfencjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
