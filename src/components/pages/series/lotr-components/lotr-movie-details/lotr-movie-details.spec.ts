import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotrMovieDetails } from './lotr-movie-details';

describe('LotrMovieDetails', () => {
  let component: LotrMovieDetails;
  let fixture: ComponentFixture<LotrMovieDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LotrMovieDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotrMovieDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
