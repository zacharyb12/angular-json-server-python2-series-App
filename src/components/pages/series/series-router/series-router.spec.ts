import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesRouter } from './series-router';

describe('SeriesRouter', () => {
  let component: SeriesRouter;
  let fixture: ComponentFixture<SeriesRouter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesRouter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesRouter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
