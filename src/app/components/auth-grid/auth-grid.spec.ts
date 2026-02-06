import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGrid } from './auth-grid';

describe('AuthGrid', () => {
  let component: AuthGrid;
  let fixture: ComponentFixture<AuthGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
