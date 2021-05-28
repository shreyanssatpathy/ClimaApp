class UI {
    constructor() {
        
        this.location= document.getElementById('w-location');
        this.desc= document.getElementById('w-desc');
        this.country= document.getElementById('w-country');
         this.temp= document.getElementById('w-string');
        // this.icon= document.getElementById('w-icon');
         this.humidity= document.getElementById('w-humidity');
         this.pressure= document.getElementById('w-dewpoint');
         this.feels= document.getElementById('w-feels');
    
         this.wind= document.getElementById('w-wind');
        // this.country= document.getElementById('w-country');
        // this.country= document.getElementById('w-country');
        // this.country= document.getElementById('w-country');
    }

    // method definition
    paint(weather) {
       
        this.location.textContent= weather.name;
        this.country.textContent= weather.sys.country;
        this.desc.textContent= weather.weather[0].description;
        this.temp.textContent= `Temp: ${weather.main.temp}K`;
        // this.icon.setAttribute=('src', weather.weather[0].icon);
        this.humidity.textContent= `Relative Humidity: ${weather.main.humidity} %`;
        this.pressure.textContent= `Pressure: ${weather.main.pressure} hPa`;
        this.feels.textContent= `Feels Like: ${weather.main.feels_like} K`;
        this.wind.textContent= `Wind-speed: ${weather.wind.speed} mph`;
        




    }
}