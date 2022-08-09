export default async function getUserLocation() {
    console.log('linked');

    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition;
    // } else {
    //     x.innerHTML = 'Geolocation is not supported by this browser.';
    // }
}

function position(pos) {
    console.log('✅', pos);
    return `${pos.coords.latitude + ' ' + pos.coords.longitude}`;
}
