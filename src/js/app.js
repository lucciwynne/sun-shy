// CSS import
import '../sass/main.scss';

// JS imports
import { getSunAlt } from './models/SunAlt';
import { renderResultsCard, displaySunAlt, clearResults } from './views/sunAltView';
import { displayDate } from './views/timeView';
import { elements } from './views/base';
import { getTime } from './models/Time';

async function init() {
    const user = {};
    
    if ('geolocation' in navigator) {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
              resolve(position);
            });
        });

        setCoords(user, pos); 
        
        user.sunAlt = getSunAlt(user.lat, user.long);

        
        displayDate(user);
        displaySunAlt(user.sunAlt);
        elements.resultsCard.style.display = 'block';
        flipCards();
        
    }
};

// Set user's latitude and longitude
function setCoords(obj, position) {
    obj.lat = 57; //position.coords.latitude;
    obj.long = 4; //position.coords.longitude;
}

// Counts button clicks to determine refresh method
let clicks = 0; 
function countClicks() {
    clicks += 1
    console.log(clicks);
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

elements.btn.addEventListener('click', countClicks);
elements.btn.addEventListener('click', init);
