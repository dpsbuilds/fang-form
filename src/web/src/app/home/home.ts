import { Component, inject, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';
import { Weather } from '../services/weather';
import { catchError } from 'rxjs';
import { WeatherForecast } from '../models/weather-forecast';
import { WeatherForecastItem } from '../components/weather-forecast-item/weather-forecast-item';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter, WeatherForecastItem],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  homeMessage = signal('Hello, world! How are you!?');
  weatherService = inject(Weather);
  weatherItems = signal<Array<WeatherForecast>>([]);

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed ${event.key}`);
  }

  ngOnInit(): void {
    this.weatherService
      .getWeatherFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);

          throw err;
        }),
      )
      .subscribe((weather) => {
        this.weatherItems.set(weather);
      });
  }
}
