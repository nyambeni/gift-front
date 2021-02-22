import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftBoxFormComponent } from './gift-box-form.component';

describe('GiftBoxFormComponent', () => {
  let component: GiftBoxFormComponent;
  let fixture: ComponentFixture<GiftBoxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftBoxFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
