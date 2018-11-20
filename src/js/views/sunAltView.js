import { elements } from './base';

export const displaySunAlt = (altitude) => {

    // Display results and change fun facts based on altitude
    if (altitude < 0) {
        elements.text.innerHTML = `The sun is below the horizon, you have nothing to worry about!`;
        console.log(`The sun is below the horizon, you have nothing to worry about!`);
    } else if (0 < altitude < 50) {
        elements.text.innerHTML = `The sun is only ${altitude} degrees above the horizon. Protect yourself!`;
        console.log(`The sun is only ${altitude} degrees above the horizon. Protect yourself!`);
    } else if (altitude > 50) {
        elements.text.innerHTML = `The sun is ${altitude} degrees above the horizon. Go out and get a bit of vitamin D!`;
        console.log(`The sun is ${altitude} degrees above the horizon. Go out and get a bit of vitamin D!`);
    }
    
};

export function clearResults() {
    elements.text.innerHTML = '';
};