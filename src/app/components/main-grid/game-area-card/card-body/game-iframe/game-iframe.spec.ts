import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameIframe } from './game-iframe';

describe('GameIframe', () => {
  let component: GameIframe;
  let fixture: ComponentFixture<GameIframe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameIframe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameIframe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
