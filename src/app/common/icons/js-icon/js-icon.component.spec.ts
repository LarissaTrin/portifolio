import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsIconComponent } from './js-icon.component';

describe('JsIconComponent', () => {
  let component: JsIconComponent;
  let fixture: ComponentFixture<JsIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsIconComponent]
    });
    fixture = TestBed.createComponent(JsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
