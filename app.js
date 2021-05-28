const weather = new Weather('Miami', 'USA');

 const ui= new UI();

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);


// change location 
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    const city = document.getElementById('city').value;
    const country= document.getElementById('country').value;

    weather.changeLocation(city,country);

    getWeather();
    $('#locModal').modal('hide');

});



function getWeather() {
    weather.getWeather() 
    .then(results=> {
        ui.paint(results); 
        // console.log(results.name);
    })
    .catch(err=> console.log(err));
    
    }
