import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreShellComponent } from './core-shell.component';

describe('CoreShellComponent', () => {
  let component: CoreShellComponent;
  let fixture: ComponentFixture<CoreShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
