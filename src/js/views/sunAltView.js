import { elements } from './base';

export const displaySunAlt = (altitude) => {

    elements.altitude.innerHTML = `${altitude} degrees`;
    
};

export function clearResults() {
    elements.dataSection.innerHTML = '';
}