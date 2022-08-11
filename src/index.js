import './style.css';
import getGif from './gifGet.js';
import displayInfo from './messages.js';
import inputsInit from './inputs.js';

// let lat = 0;
// let lon = 0;

export default async function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            await function (position) {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
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

async function getWeather(lat, lon, locationSearched) {
    let placename = '';
    let whatTheWeatherIs = '';

    let searchTerm = '';
    if (locationSearched) {
        console.log('HERE');
        try {
            const cityResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ac5deb61b3a4bf48a75d86f3f69909b`,
                { mode: 'cors' }
            );
            if (!cityResponse.ok) {
                throw new Error(`City ${city} not found`);
                return;
            }
            const cityWeatherData = await cityResponse.json();
            lat = +cityWeatherData.coord.lat;
            lon = +cityWeatherData.coord.lon;
        } catch (error) {
            console.log(error, '⚠️');
        }
    } else {
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
    }

    getGif(searchTerm);
}

inputsInit();
getLocation();

// * 7ac5deb61b3a4bf48a75d86f3f69909b my API key
