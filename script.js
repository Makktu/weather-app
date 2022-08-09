'use strict';

async function getGif(searchTerm) {
    // msgArea.innerHTML = `<p>"${searchTerm}"</p>`;
    // getLinkBtn.innerText = 'COPY LINK';

    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/translate?api_key=cMKYPrx6cw6fB9UYB4vjPH4mCT5AgXFo&s=${searchTerm}`,
            { mode: 'cors' }
        );
        const gifData = await response.json();
        let thisImage = gifData.data.images.original.url;
        img.src = thisImage;
    } catch (error) {
        // msgArea.innerHTML = `<p>${error}</p>`;
        img.src =
            'https://media4.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif?cid=f6fa26a6azn49z0iy7d5pd2wf84hgi348pn9wck0zwbcg6n9&rid=giphy.gif&ct=g';
        console.log(error);
    }
}

async function getWeather(location) {
    let lat = 52.41368;
    let lon = -1.503834;
    // let lat = 40.746841;
    // let lon = -74.060025;
    let placename = '';
    let whatTheWeatherIs = '';
    let theFahrenheit = 0;
    let theCelsius = 0;

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

        try {
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

    getGif(whatTheWeatherIs);
}

const img = document.querySelector('img');

// * 7ac5deb61b3a4bf48a75d86f3f69909b my API key
// * Kelvin to Celsius: C = K - 273.15
// * Kelvin to Fahrenheit: F = 1.8*(K-273) + 32

getWeather();
