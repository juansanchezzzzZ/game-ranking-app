import { TestBed } from '@angular/core/testing';

import { NavlinksUiService } from './navlinks.ui.service';

describe('NavlinksUiService', () => {
  let service: NavlinksUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavlinksUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
