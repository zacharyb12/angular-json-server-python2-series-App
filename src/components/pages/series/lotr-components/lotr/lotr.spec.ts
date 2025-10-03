import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lotr } from './lotr';

describe('Lotr', () => {
  let component: Lotr;
  let fixture: ComponentFixture<Lotr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lotr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lotr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
