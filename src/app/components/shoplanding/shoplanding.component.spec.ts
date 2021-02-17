import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoplandingComponent } from './shoplanding.component';

describe('ShoplandingComponent', () => {
  let component: ShoplandingComponent;
  let fixture: ComponentFixture<ShoplandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoplandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoplandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
