import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GqlIconComponent } from './gql-icon.component';

describe('GqlIconComponent', () => {
  let component: GqlIconComponent;
  let fixture: ComponentFixture<GqlIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GqlIconComponent]
    });
    fixture = TestBed.createComponent(GqlIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
