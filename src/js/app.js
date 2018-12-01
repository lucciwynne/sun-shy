// CSS import
import '../sass/main.scss';

// JS imports
import { getSunAlt } from './models/SunAlt';
import { displaySunAlt } from './views/sunAltView';
import { displayDate, displayForecast } from './views/timeView';
import { displayFact } from './views/factsView';
import { elements } from './views/base';

async function init() {
    const user = {};
    const today = new Date();

    startSpinner();
    
    if ('geolocation' in navigator) {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
              resolve(position);
            },
            noPosition); // Error function
        });

        // Set position and altitude
        setCoords(user, pos);
        user.sunAlt = getSunAlt(today, user.lat, user.long);

        // Results card
        displaySunAlt(user.sunAlt);
        displayDate(user);
 
        // Forecast card
        if (clicks > 1) {
            setTimeout(function() {
                displayForecast(user.lat, user.long);
            }, 250); // Syncs with flip animation delay
        } else {
            displayForecast(user.lat, user.long);
        }

        // Facts card
        if (clicks > 1) {
            setTimeout(function() {
                displayFact(user.sunAlt);
            }, 500); // Syncs with flip animation delay
        } else {
            displayFact(user.sunAlt); 
        }
        
        stopSpinner();
        flipCards();
        
    }
};

// Error handling when geolocation is not enabled
function noPosition() {
    elements.resultsCard.innerHTML = `
        <h4 class="heading-4" id="date">Oopsies!</h4>
        <p class="data__card--result">
            <span class="data__card--altitude"></span>
        </p>
        <p class="data__card--advice">Could not retrieve your position.<br><br> Please enable geolocation in your browser or on your mobile device and retry.</p>
    `; 
    elements.resultsCard.style.display = 'block';
    elements.forecastCard.style.display = 'none';
    elements.factsCard.style.display = 'none';
    stopSpinner();
}

// Set user's latitude and longitude
function setCoords(obj, position) {
    obj.lat = position.coords.latitude; // -12 36 
    obj.long = position.coords.longitude; // 130 140
}

// Displays loading animation while fetching data
function startSpinner() {
    elements.sunText.style.fontSize = '1.4rem';
    elements.sunText.innerHTML = '<p>Loading</p>'; 

    elements.sun.style.animation = 'rotation 10s linear infinite';
}

// Stops loading animation
function stopSpinner() {
    elements.sun.style.animation = '';
    
    elements.sunText.style.fontSize = '1.6rem';
    elements.sunText.innerHTML = '<p>Tap</p>';
}

// Counts button clicks to determine refresh method
let clicks = 0; 
function countClicks() {
    clicks += 1
    return clicks;
}

// Flip cards on refresh
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