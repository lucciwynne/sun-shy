import { getTime, getForecast } from '../models/Time';
import { elements } from './base';

// Test
import { getSunAlt } from '../models/SunAlt';

export const displayDate = (obj) => {
    elements.date.innerHTML = getTime(obj);
};

export function displayForecast(lat, long) {
    const altitudes = getForecast(lat, long);

    if (altitudes.length > 0) {
        const start = altitudes[0].format('HH:mm');
        const end = altitudes[altitudes.length - 1].format('HH:mm');

        elements.forecast.innerHTML = `
            Today the sun will be at or above 50 degrees from <strong>${start}</strong> to <strong>${end}</strong>.
        `;
    } else {
        elements.forecast.innerHTML = `
            Today the sun will not rise to 50 degrees above the horizon.
        `;
    }

    elements.forecastCard.style.display = 'block';

    // Test
    for (let i = 0; i < altitudes.length; i++) {
        console.log(`${altitudes[i].format('HH:mm')}: ${getSunAlt(altitudes[i], lat, long)}`);
    }
}