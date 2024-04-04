import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usa-map',
  standalone: true,
  imports: [],
  templateUrl: './usa-map.component.html',
  styleUrl: './usa-map.component.scss'
})
export class UsaMapComponent {
  weather: any = {};

  constructor (private apiService: ApiService) {}

  setWeatherData(event: any) {
    console.log('event', event.target.id);
    this.apiService.fetchWeatherData(event.target.id).subscribe((data: any) => {
      console.log(data)
      this.weather = {
        ...data,
        state: event.target.getAttribute('title')
      }
    })
  }

}
