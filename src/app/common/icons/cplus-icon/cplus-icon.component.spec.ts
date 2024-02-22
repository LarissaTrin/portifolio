import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CplusIconComponent } from './cplus-icon.component';

describe('CplusIconComponent', () => {
  let component: CplusIconComponent;
  let fixture: ComponentFixture<CplusIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CplusIconComponent]
    });
    fixture = TestBed.createComponent(CplusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
