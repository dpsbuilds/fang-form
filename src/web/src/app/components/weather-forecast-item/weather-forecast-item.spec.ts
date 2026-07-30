import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastItem } from './weather-forecast-item';

describe('WeatherForecastItem', () => {
  let component: WeatherForecastItem;
  let fixture: ComponentFixture<WeatherForecastItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherForecastItem],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherForecastItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
