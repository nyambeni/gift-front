import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpepperComponent } from './spepper.component';

describe('SpepperComponent', () => {
  let component: SpepperComponent;
  let fixture: ComponentFixture<SpepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
