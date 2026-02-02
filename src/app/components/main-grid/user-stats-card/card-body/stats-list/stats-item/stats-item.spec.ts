import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsItem } from './stats-item';

describe('StatsItem', () => {
  let component: StatsItem;
  let fixture: ComponentFixture<StatsItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
