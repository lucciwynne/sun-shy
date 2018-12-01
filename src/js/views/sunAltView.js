import { getTime } from '../models/Time';
import { elements } from './base';

export const displaySunAlt = () => {
    /*
    elements.resultsCard.innerHTML = `
        <h4 class="heading-4" id="date"></h4>
        <p class="data__card--result">
            <span class="data__card--altitude">${Math.abs(altitude)} degrees</span>
        </p>
        <p class="data__card--advice">
            You have nothing to worry about!
        </p>
    `;

    
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
    */

    // Make card visible
    elements.resultsCard.style.display = 'block';
    
};

export function renderResultsCard(obj) {
    getTime(obj);

    if (obj.sunAlt < 0) {
        elements.resultsCard.innerHTML = `
            <h4 class="heading-4" id="date">${obj.date}</h4>
            <p class="data__card--result">
                The sun is
                <span class="data__card--altitude">${Math.abs(obj.sunAlt)} degrees</span>
                below the horizon.
            </p>
            <p class="data__card--advice">
                You have nothing to worry about!
            </p>
        `;
    } else if (obj.sunAlt > 50) {
        elements.resultsCard.innerHTML = `
            <h4 class="heading-4" id="date">${obj.date}</h4>
            <p class="data__card--result">
                The sun is
                <span class="data__card--altitude">${obj.sunAlt} degrees</span>
                above the horizon.
            </p>
            <p class="data__card--advice">
                UVB is present in the atmosphere.<br>Feel free to get a bit of sun exposure and vitamin D, but proceed with caution!
            </p>
        `;
    } else {
        elements.resultsCard.innerHTML = `
            <h4 class="heading-4" id="date">${obj.date}</h4>
            <p class="data__card--result">
                The sun is
                <span class="data__card--altitude">${obj.sunAlt} degrees</span>
                above the horizon.
            </p>
            <p class="data__card--advice">
                UVB is not present thus vitamin D cannot be produced.<br> Protect your skin with sunscreen and clothing!
            </p>
        `;
    }

    displaySunAlt();
}