import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousButton } from './previous-button';

describe('PreviousButton', () => {
  let component: PreviousButton;
  let fixture: ComponentFixture<PreviousButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
