import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileButton } from './edit-profile-button';

describe('EditProfileButton', () => {
  let component: EditProfileButton;
  let fixture: ComponentFixture<EditProfileButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProfileButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
