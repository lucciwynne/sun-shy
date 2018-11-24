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
    }

    elements.altitude.innerHTML = `${altitude} degrees`;
    
};

export function clearResults() {
    elements.dataSection.innerHTML = '';
}