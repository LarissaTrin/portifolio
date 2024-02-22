import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsIconComponent } from './ts-icon.component';

describe('TsIconComponent', () => {
  let component: TsIconComponent;
  let fixture: ComponentFixture<TsIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsIconComponent]
    });
    fixture = TestBed.createComponent(TsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
