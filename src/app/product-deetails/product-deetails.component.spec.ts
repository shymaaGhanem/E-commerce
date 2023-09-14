import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeetailsComponent } from './product-deetails.component';

describe('ProductDeetailsComponent', () => {
  let component: ProductDeetailsComponent;
  let fixture: ComponentFixture<ProductDeetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDeetailsComponent]
    });
    fixture = TestBed.createComponent(ProductDeetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
