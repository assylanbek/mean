import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInstructorComponent } from './login-instructor.component';

describe('LoginInstructorComponent', () => {
  let component: LoginInstructorComponent;
  let fixture: ComponentFixture<LoginInstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginInstructorComponent]
    });
    fixture = TestBed.createComponent(LoginInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
