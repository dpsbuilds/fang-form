import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { WeatherForecast } from '../models/weather-forecast';

@Service()

export class Weather {
    http = inject(HttpClient);

    getWeatherFromApi() {
        const url = `http://localhost:5223/weatherforecast`;

        return this.http.get<Array<WeatherForecast>>(url);
    }
}
