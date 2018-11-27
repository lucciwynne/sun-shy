const moment = require('moment');
import { getSunAlt } from './SunAlt';

export const getTime = (obj) => {
    const today = new Date();
    const result = moment(today).format('ddd, MMMM DD HH:mm');
    obj.date = result;
    return result;
};

// Find out whether the sun will rise past 50 degrees and at what times

// Start date at midnight/ 00:00 on the current day
// Increment time by 10 minutes and add new time to array


// If the altitude is 50 or above at that time, push to array
// Return first item and last item in array to display time period

export function getForecast(lat, long) {
    const today = new Date();
    const start = moment(today).startOf('day');
    
    const times = [start];
    const arr = [];
    
    const tenBlocks = 144;

    let count = 0;
    for (let i = 1; i < tenBlocks; i++) {
        count += 10;
        times[i] = new moment(today).startOf('day').add(count, 'minutes');
    }

    for (let i = 0; i < times.length; i++) {
        if (getSunAlt(times[i], lat, long) >= 50) {
            arr.push(times[i]);
        }
    }

    return arr;
}