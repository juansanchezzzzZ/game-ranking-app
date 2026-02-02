import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGrid } from './main-grid';

describe('MainGrid', () => {
  let component: MainGrid;
  let fixture: ComponentFixture<MainGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
