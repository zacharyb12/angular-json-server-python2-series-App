import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotBookDetails } from './got-book-details';

describe('GotBookDetails', () => {
  let component: GotBookDetails;
  let fixture: ComponentFixture<GotBookDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GotBookDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotBookDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
