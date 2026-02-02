import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsCard } from './rankings-card';

describe('RankingsCard', () => {
  let component: RankingsCard;
  let fixture: ComponentFixture<RankingsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
