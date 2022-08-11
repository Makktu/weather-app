import getLocation from './index.js';

let locationSearched = '';

export default function inputsInit() {
    const refreshBtn = document.getElementById('refresh-btn');
    refreshBtn.addEventListener('click', () => {
        console.log('clicked');
        getLocation();
    });

    const inputField = document.getElementById('input-box');

    const findBtn = document.getElementById('search-btn');
    findBtn.addEventListener('click', () => {
        if (inputField.value) {
            locationSearched = inputField.value;
            inputField.value = '';
            getLocation(locationSearched);
        }
    });
}
