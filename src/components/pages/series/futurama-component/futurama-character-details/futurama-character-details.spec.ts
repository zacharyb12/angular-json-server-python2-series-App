import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturamaCharacterDetails } from './futurama-character-details';

describe('FuturamaCharacterDetails', () => {
  let component: FuturamaCharacterDetails;
  let fixture: ComponentFixture<FuturamaCharacterDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuturamaCharacterDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturamaCharacterDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
