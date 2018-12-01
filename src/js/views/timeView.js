import { getForecast } from '../models/Time';
import { elements } from './base';

// Test
import { getSunAlt } from '../models/SunAlt';

export function displayForecast(lat, long) {
    const altitudes = getForecast(lat, long); // Set array of times

    // Return first item and last item in array to display time period
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

    // Make card visible
    elements.forecastCard.style.display = 'block';

    // Test
    for (let i = 0; i < altitudes.length; i++) {
        console.log(`${altitudes[i].format('HH:mm')}: ${getSunAlt(altitudes[i], lat, long)}`);
    }
}