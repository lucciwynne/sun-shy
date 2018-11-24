import { getTime } from '../models/Time';
import { elements } from './base';

export const displayDate = (obj) => {
    elements.date.innerHTML = getTime(obj);
};