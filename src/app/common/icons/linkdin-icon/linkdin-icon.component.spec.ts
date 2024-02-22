import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkdinIconComponent } from './linkdin-icon.component';

describe('LinkdinIconComponent', () => {
  let component: LinkdinIconComponent;
  let fixture: ComponentFixture<LinkdinIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkdinIconComponent]
    });
    fixture = TestBed.createComponent(LinkdinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
