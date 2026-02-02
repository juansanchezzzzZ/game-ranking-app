import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusText } from './status-text';

describe('StatusText', () => {
  let component: StatusText;
  let fixture: ComponentFixture<StatusText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
