import { elements } from './base';

export const displaySunAlt = (altitude) => {
    
    if (altitude < 0) {
        elements.results.innerHTML = `
            The sun is
            <span class="data__card--altitude">${Math.abs(altitude)} degrees</span>
            below the horizon.
        `;
        elements.advice.innerHTML = `
            You have nothing to worry about!
        `;
    } else if (altitude > 50) {
        elements.advice.innerHTML = `
            UVB is present in the atmosphere.<br>Feel free to get a bit of sun exposure and vitamin D, but proceed with caution!
        `;
    } else {
        elements.advice.innerHTML = `
            UVB is not present thus vitamin D cannot be produced.<br> Protect your skin with sunscreen and clothing!
        `;
    }

    elements.altitude.innerHTML = `${altitude} degrees`;

    // Make card visible
    elements.resultsCard.style.display = 'block';
    
};