import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturamaEpisodeDetails } from './futurama-episode-details';

describe('FuturamaEpisodeDetails', () => {
  let component: FuturamaEpisodeDetails;
  let fixture: ComponentFixture<FuturamaEpisodeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuturamaEpisodeDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturamaEpisodeDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
