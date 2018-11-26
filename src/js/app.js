// CSS import
import '../sass/main.scss';

// JS imports
import { getSunAlt } from './models/SunAlt';
import { renderResultsCard, displaySunAlt, clearResults } from './views/sunAltView';
import { displayDate } from './views/timeView';
import { displayFact } from './views/factsView';
import { elements } from './views/base';
//import { getTime } from './models/Time';

async function init() {
    const user = {};

    startSpinner();
    
    if ('geolocation' in navigator) {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
              resolve(position);
            });
        });

        setCoords(user, pos); 
        
        user.sunAlt = getSunAlt(user.lat, user.long);

        // Results card
        displayDate(user);
        displaySunAlt(user.sunAlt);

        // Facts card
        displayFact(user.sunAlt);
        
        stopSpinner();
        flipCards();
        
    }
};

// Set user's latitude and longitude
function setCoords(obj, position) {
    obj.lat = position.coords.latitude;
    obj.long = position.coords.longitude;
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
