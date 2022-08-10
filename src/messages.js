const msgArea = document.querySelector('.messages');

export default function displayInfo(placename, whatTheWeatherIs, theKelvin) {
    let theCelsius = theKelvin - 273.15;
    let theFahrenheit = 1.8 * (theKelvin - 273) + 32;
    let todayNow = new Date();
    let theGivenTime = todayNow.getHours() + ':' + todayNow.getMinutes();
    if (+todayNow.getMinutes() < 10) {
        // carry out surgery here
    }
    console.log(typeof theGivenTime);
    msgArea.innerHTML = `<p><span style="color:cyan;font-size:2.5rem;">${placename}:</span><br>${whatTheWeatherIs}<br>${theCelsius.toFixed(
        1
    )}C / ${theFahrenheit.toFixed(
        1
    )}F<br><span style="font-size:1.6rem">Time: ${theGivenTime}</span></p>`;
}

// * Kelvin to Celsius: C = K - 273.15
// * Kelvin to Fahrenheit: F = 1.8*(K-273) + 32
