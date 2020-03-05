import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyShawerComponent } from './baby-shawer.component';

describe('BabyShawerComponent', () => {
  let component: BabyShawerComponent;
  let fixture: ComponentFixture<BabyShawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyShawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyShawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
