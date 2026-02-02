import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLinks } from './navigation-links';

describe('NavigationLinks', () => {
  let component: NavigationLinks;
  let fixture: ComponentFixture<NavigationLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationLinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
