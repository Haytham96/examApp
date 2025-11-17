import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Haytham } from './haytham';

describe('Haytham', () => {
  let component: Haytham;
  let fixture: ComponentFixture<Haytham>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Haytham]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Haytham);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
