import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCardBody } from './auth-card-body';

describe('AuthCardBody', () => {
  let component: AuthCardBody;
  let fixture: ComponentFixture<AuthCardBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthCardBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthCardBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
