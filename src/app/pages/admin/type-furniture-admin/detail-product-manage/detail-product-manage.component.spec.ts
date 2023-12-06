import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductManageComponent } from './detail-product-manage.component';

describe('DetailProductManageComponent', () => {
  let component: DetailProductManageComponent;
  let fixture: ComponentFixture<DetailProductManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProductManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProductManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
