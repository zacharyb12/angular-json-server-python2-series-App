import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotCharacterDetails } from './got-character-details';

describe('GotCharacterDetails', () => {
  let component: GotCharacterDetails;
  let fixture: ComponentFixture<GotCharacterDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GotCharacterDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotCharacterDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
