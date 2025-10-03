import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotrCharacterDetails } from './lotr-character-details';

describe('LotrCharacterDetails', () => {
  let component: LotrCharacterDetails;
  let fixture: ComponentFixture<LotrCharacterDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LotrCharacterDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotrCharacterDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
