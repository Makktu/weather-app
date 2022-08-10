import './style.css';
import getGif from './gifGet.js';
import displayInfo from './messages.js';
import inputsInit from './inputs.js';

let placename = '';
let whatTheWeatherIs = '';

let searchTerm = '';
let lat = 0;
let lon = 0;

export default async function getLocation() {
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
        weatherData.name
            ? (placename = weatherData.name)
            : (placename = `${lat} Lat ${lon} Lon`);
        whatTheWeatherIs = `${weatherData.weather[0].main} - ${weatherData.weather[0].description}`;

        searchTerm = weatherData.weather[0].main;

        try {
            displayInfo(placename, whatTheWeatherIs, weatherData.main.temp);
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log('💥 ERROR', error);
    }

    getGif(searchTerm);
}

inputsInit();
getLocation();

// * 7ac5deb61b3a4bf48a75d86f3f69909b my API key
