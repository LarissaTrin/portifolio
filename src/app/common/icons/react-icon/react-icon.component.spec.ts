import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactIconComponent } from './react-icon.component';

describe('ReactIconComponent', () => {
  let component: ReactIconComponent;
  let fixture: ComponentFixture<ReactIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactIconComponent]
    });
    fixture = TestBed.createComponent(ReactIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
