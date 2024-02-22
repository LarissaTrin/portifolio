import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlserverIconComponent } from './sqlserver-icon.component';

describe('SqlserverIconComponent', () => {
  let component: SqlserverIconComponent;
  let fixture: ComponentFixture<SqlserverIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqlserverIconComponent]
    });
    fixture = TestBed.createComponent(SqlserverIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
