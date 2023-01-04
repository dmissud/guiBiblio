import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProviderShellComponent } from './data-provider-shell.component';

describe('BiblioShellComponent', () => {
  let component: DataProviderShellComponent;
  let fixture: ComponentFixture<DataProviderShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataProviderShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataProviderShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
