import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotHouseDetails } from './got-house-details';

describe('GotHouseDetails', () => {
  let component: GotHouseDetails;
  let fixture: ComponentFixture<GotHouseDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GotHouseDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotHouseDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
