import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFamilyComponent } from './data-family.component';

describe('DataFamilyComponent', () => {
  let component: DataFamilyComponent;
  let fixture: ComponentFixture<DataFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
