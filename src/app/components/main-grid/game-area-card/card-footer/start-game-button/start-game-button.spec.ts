import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartGameButton } from './start-game-button';

describe('StartGameButton', () => {
  let component: StartGameButton;
  let fixture: ComponentFixture<StartGameButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartGameButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartGameButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
