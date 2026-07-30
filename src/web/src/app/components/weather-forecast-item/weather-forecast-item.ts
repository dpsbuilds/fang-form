import { Component, input } from '@angular/core';
import { WeatherForecast } from '../../models/weather-forecast';

@Component({
  selector: 'app-weather-forecast-item',
  imports: [],
  templateUrl: './weather-forecast-item.html',
  styleUrl: './weather-forecast-item.scss',
})

export class WeatherForecastItem {
  forecast = input.required<WeatherForecast>();
}
