import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeFurnitureOfAdminComponent } from './type-furniture-admin.component';

describe('TypeFurnitureAdminComponent', () => {
  let component: TypeFurnitureOfAdminComponent;
  let fixture: ComponentFixture<TypeFurnitureOfAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeFurnitureOfAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypeFurnitureOfAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
