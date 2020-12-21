import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpisokPokupokComponent } from './spisok-pokupok.component';

describe('SpisokPokupokComponent', () => {
  let component: SpisokPokupokComponent;
  let fixture: ComponentFixture<SpisokPokupokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpisokPokupokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpisokPokupokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
