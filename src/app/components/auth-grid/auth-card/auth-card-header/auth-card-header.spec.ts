import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCardHeader } from './auth-card-header';

describe('AuthCardHeader', () => {
  let component: AuthCardHeader;
  let fixture: ComponentFixture<AuthCardHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthCardHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthCardHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
