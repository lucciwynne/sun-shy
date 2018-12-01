import { facts } from '../models/Facts';
import { elements } from './base';

// Generate random fun fact based on sun altitude results
export function displayFact(altitude) {
    let index;
    
    if (altitude < 0) {
        index = Math.round(Math.random() * (facts.general.length - 1));
        elements.fact.innerHTML = facts.general[index];
    } else if (altitude > 50) {
        index = Math.round(Math.random() * (facts.above50.length - 1));
        elements.fact.innerHTML = facts.above50[index];
    } else {
        index = Math.round(Math.random() * (facts.below50.length - 1));
        elements.fact.innerHTML = facts.below50[index];
    }

    // Make card visible
    elements.factsCard.style.display = 'block';
}