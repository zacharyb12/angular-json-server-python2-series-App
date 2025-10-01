import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRouter } from './user-router';

describe('UserRouter', () => {
  let component: UserRouter;
  let fixture: ComponentFixture<UserRouter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRouter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRouter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
