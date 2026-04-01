import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encontrar } from './encontrar';

describe('Encontrar', () => {
  let component: Encontrar;
  let fixture: ComponentFixture<Encontrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encontrar],
    }).compileComponents();

    fixture = TestBed.createComponent(Encontrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
