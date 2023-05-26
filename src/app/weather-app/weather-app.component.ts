import { Component, OnInit } from '@angular/core';
import { ApiService } from '../weather-service/api.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})



export class WeatherAppComponent  {
  
  // weatherImage: string = 'https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/cumulus-cloud.jpg';
  // temp: number = 0;

weatherData:any;
city:any;
  constructor(private api:ApiService){}

  getWeatherDetails(){

    this.api.getWeatherDetails(this.city)
    .subscribe((result:any)=>{
 console.log(result);
 this.weatherData = result
//  this.temp = this.weatherData.main.temp;
//  this.updateWeatherImage();
 
    })
  }


  // updateWeatherImage() {
  //   if (this.weatherData.main.temp > 30) {
  // //     this.weatherImage = 'https://admin.goweatherforecast.com/templateEditor/kcfinder/uploads/images/blog/what-is-the-weather-like-in-the-desert-2.png';
  // //   } else if (this.temp < 10) {
  // //     this.weatherImage = 'https://echotape.com/wp-content/uploads/2022/04/bigstock-Winter-Forest-Road-50157524.jp';
  // //   } else {
  // //     this.weatherImage = 'https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/cumulus-cloud.jpg';
  //   }
  // }

  // temp: number = 0;

  // getWeatherImage(): string {
  //   if (this.temp > 30) {
  //     return 'https://admin.goweatherforecast.com/templateEditor/kcfinder/uploads/images/blog/what-is-the-weather-like-in-the-desert-2.png';
  //   } else if (this.temp < 10) {
  //     return 'https://echotape.com/wp-content/uploads/2022/04/bigstock-Winter-Forest-Road-50157524.jpg';
  //   } else {
  //     return 'https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/cumulus-cloud.jpg';
  //   }
  // }

}
