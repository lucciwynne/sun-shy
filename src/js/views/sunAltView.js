import { getTime } from '../models/Time';
import { elements } from './base';

// Make card visible
export const displayResultsCard = () => {
    elements.resultsCard.style.display = 'block';
};

// Render results card based on sun altitude and simultaneously clear previous results
export function renderResultsCard(obj) {
    // Set date property on object
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

    displayResultsCard();
}