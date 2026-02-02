import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsTable } from './rankings-table';

describe('RankingsTable', () => {
  let component: RankingsTable;
  let fixture: ComponentFixture<RankingsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
