import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Futurama } from './futurama';

describe('Futurama', () => {
  let component: Futurama;
  let fixture: ComponentFixture<Futurama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Futurama]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Futurama);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
