import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreParentComponent } from './core-parent.component';

describe('CoreParentComponent', () => {
  let component: CoreParentComponent;
  let fixture: ComponentFixture<CoreParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
