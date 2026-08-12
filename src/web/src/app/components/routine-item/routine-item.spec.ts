import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineItem } from './routine-item';

describe('RoutineItem', () => {
  let component: RoutineItem;
  let fixture: ComponentFixture<RoutineItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutineItem],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutineItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
