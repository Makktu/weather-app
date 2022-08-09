export { lat, lon };

export default async function getUserLocation() {
    if (navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(
            function (position) {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                console.log(lat, lon);
            },
            function () {
                alert('could not get location');
            }
        );
    } else {
        x.innerHTML = 'Geolocation is not supported by this browser.';
    }
}

function successCallback(position) {
    console.log(position);
}
function errorCallback(error) {
    console.log(error);
}

let lat = 0;
let lon = 0;
