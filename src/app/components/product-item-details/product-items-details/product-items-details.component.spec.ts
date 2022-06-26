import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemsDetailsComponent } from './product-items-details.component';

describe('ProductItemsDetailsComponent', () => {
  let component: ProductItemsDetailsComponent;
  let fixture: ComponentFixture<ProductItemsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
