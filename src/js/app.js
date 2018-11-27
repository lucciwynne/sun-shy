// CSS import
import '../sass/main.scss';

// JS imports
import { getSunAlt } from './models/SunAlt';
import { displaySunAlt } from './views/sunAltView';
import { displayDate } from './views/timeView';
import { displayFact } from './views/factsView';
import { elements } from './views/base';
//import { getTime } from './models/Time';

async function init() {
    const user = {};
    const today = new Date();

    startSpinner();
    
    if ('geolocation' in navigator) {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
              resolve(position);
            });
        });

        // Set position and altitude
        setCoords(user, pos); 
        user.sunAlt = getSunAlt(today, user.lat, user.long);

        // Results card
        displayDate(user);
        displaySunAlt(user.sunAlt);

        // Facts card
        if (clicks > 1) {
            setTimeout(function() {
                displayFact(user.sunAlt);
            }, 250);
        } else {
            displayFact(user.sunAlt);
        }
        
        
        stopSpinner();
        flipCards();
        
    }
};

// Set user's latitude and longitude
function setCoords(obj, position) {
    obj.lat = position.coords.latitude; // -12 36 
    obj.long = position.coords.longitude; // 130 140
}

// Displays loading animation while fetching data
function startSpinner() {
    elements.sunText.style.transform = 'translate(-50%, 190%)';
    elements.sunText.style.fontSize = '1.4rem';
    elements.sunText.innerHTML = 'Loading'; 

    elements.sun.style.animation = 'rotation 10s linear infinite';
}

// Stops loading animation
function stopSpinner() {
    elements.sun.style.animation = '';

    elements.sunText.style.transform = 'translate(-50%, 175%)';
    elements.sunText.style.fontSize = '';
    elements.sunText.innerHTML = 'Tap';
}

// Counts button clicks to determine refresh method
let clicks = 0; 
function countClicks() {
    clicks += 1
    return clicks;
}

// Flip results cards to refresh on button click
let rotation = 0;
function flipCards() {
    rotation -= 720;
    const cards = document.querySelectorAll('.data__card');
    
    cards.forEach(card => {
        card.style.transform = `perspective(600px) rotateX(${rotation}deg)`;
    });
}

// Event listeners
elements.btn.addEventListener('click', countClicks);
elements.btn.addEventListener('click', init);


// Test
const moment = require('moment');

const today = new Date();
const times = [];
const tenBlocks = 144;

let count = 0;
for (let i = 0; i < tenBlocks; i++) {
    count += 10;
    times[i] = new moment(today).startOf('day').add(count, 'minutes');
}

console.log(times);

/*
for (let i = 0; i < times.length; i++) {
    console.log(`${times[i]}: ${getSunAlt(times[i], -12, 130)}`);
}
*/

const alts = [];
for (let i = 0; i < times.length; i++) {
    if (getSunAlt(times[i], -12, 130) >= 50) {
        alts.push(times[i]);
    }
}

for (let i = 0; i < alts.length; i++) {
    console.log(`${alts[i]}: ${getSunAlt(alts[i], -12, 130)}`);
}

console.log(`Today the sun will be at or above 50 degrees from ${alts[0].format('HH:mm')} to ${alts[alts.length - 1].format('HH:mm')}.`)