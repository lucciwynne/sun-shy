import { facts } from '../models/Facts';
import { elements } from './base';

export function displayFact(altitude) {
    let index;
    
    if (altitude < 0) {
        index = Math.round(Math.random() * (facts.general.length - 1));
        elements.fact.innerHTML = facts.general[index];
    }

    elements.factsCard.style.display = 'block';
}