class Weather {
    constructor(city, country) {
        this.apiKey= '47b2600f3ffa622c58ed4df8cdcb9994';
        this.city=city;
        this.country=country;
            
    }
    

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

        const responseData= await response.json();

        return responseData;
    }

    // change weather location
    changeLocation(city,country) {
        this.city=city;
        this.country=country;
    }
}

