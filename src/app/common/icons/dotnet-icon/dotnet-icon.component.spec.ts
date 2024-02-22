import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetIconComponent } from './dotnet-icon.component';

describe('DotnetIconComponent', () => {
  let component: DotnetIconComponent;
  let fixture: ComponentFixture<DotnetIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotnetIconComponent]
    });
    fixture = TestBed.createComponent(DotnetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
