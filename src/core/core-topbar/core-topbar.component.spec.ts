import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreTopbarComponent } from './core-topbar.component';

describe('CoreTopbarComponent', () => {
  let component: CoreTopbarComponent;
  let fixture: ComponentFixture<CoreTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreTopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
