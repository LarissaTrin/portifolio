import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsharpIconComponent } from './csharp-icon.component';

describe('CsharpIconComponent', () => {
  let component: CsharpIconComponent;
  let fixture: ComponentFixture<CsharpIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsharpIconComponent]
    });
    fixture = TestBed.createComponent(CsharpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
