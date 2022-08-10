import getGif from './gifGet.js';

let placename = '';
let whatTheWeatherIs = '';
let theFahrenheit = 0;
let theCelsius = 0;
let searchTerm = '';
let lat = 0;
let lon = 0;

async function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            await function (position) {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                getWeather(lat, lon);
            },
            function () {
                alert('could not get location');
            }
        );
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

async function getWeather(lat, lon) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7ac5deb61b3a4bf48a75d86f3f69909b`,
            { mode: 'cors' }
        );
        const weatherData = await response.json();
        console.log(weatherData);
        weatherData.name
            ? (placename = weatherData.name)
            : (placename = `${lat} Lat ${lon} Lon`);
        whatTheWeatherIs = `${weatherData.weather[0].main} - ${weatherData.weather[0].description}`;

        searchTerm = weatherData.weather[0].main;

        try {
            // * Kelvin to Celsius: C = K - 273.15
            // * Kelvin to Fahrenheit: F = 1.8*(K-273) + 32
            theCelsius = weatherData.main.temp - 273.15;
            theFahrenheit = 1.8 * (weatherData.main.temp - 273) + 32;
        } catch (error) {
            console.log(error);
        }

        console.log(
            `${placename}: ${whatTheWeatherIs} (${theCelsius.toFixed(
                1
            )}C / ${theFahrenheit.toFixed(1)}F)`
        );
    } catch (error) {
        console.log('💥 ERROR', error);
    }

    getGif(searchTerm);
    console.log('➡️', searchTerm);
}

getLocation();

// * 7ac5deb61b3a4bf48a75d86f3f69909b my API key
