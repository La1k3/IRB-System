import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BronComponent } from './bron.component';

describe('BronComponent', () => {
  let component: BronComponent;
  let fixture: ComponentFixture<BronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
