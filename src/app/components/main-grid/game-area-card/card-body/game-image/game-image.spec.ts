import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameImage } from './game-image';

describe('GameImage', () => {
  let component: GameImage;
  let fixture: ComponentFixture<GameImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
