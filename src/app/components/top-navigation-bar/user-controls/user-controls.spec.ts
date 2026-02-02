import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControls } from './user-controls';

describe('UserControls', () => {
  let component: UserControls;
  let fixture: ComponentFixture<UserControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserControls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
