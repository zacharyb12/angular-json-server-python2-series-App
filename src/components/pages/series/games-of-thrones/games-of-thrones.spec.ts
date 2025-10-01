import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesOfThrones } from './games-of-thrones';

describe('GamesOfThrones', () => {
  let component: GamesOfThrones;
  let fixture: ComponentFixture<GamesOfThrones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesOfThrones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesOfThrones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
