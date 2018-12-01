const moment = require('moment');

import { getSunAlt } from './SunAlt';

// Format and set current date and time
export const getTime = (obj) => {
    const today = new Date();
    const result = moment(today).format('ddd, MMMM DD HH:mm');
    obj.date = result;
    return result;
};

// Find out whether the sun will rise past 50 degrees and at what times
export function getForecast(lat, long) {
    const today = new Date();
    const start = moment(today).startOf('day'); // Start date at 00:00
    
    const times = [start];
    const arr = [];
    
    const tenBlocks = 144; // 144 sets of 10 minutes in a day

    // Increment time by 10 minutes and add new time to array
    let count = 0;
    for (let i = 1; i < tenBlocks; i++) {
        count += 10; // Ten minutes later
        times[i] = new moment(today).startOf('day').add(count, 'minutes');
    }

    // If the altitude is 50 or above at that time, push to new array
    for (let i = 0; i < times.length; i++) {
        if (getSunAlt(times[i], lat, long) >= 50) {
            arr.push(times[i]);
        }
    }

    return arr; // Array of times when the sun will be 50 degrees or higher
}