import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAreaCard } from './game-area-card';

describe('GameAreaCard', () => {
  let component: GameAreaCard;
  let fixture: ComponentFixture<GameAreaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameAreaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameAreaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
