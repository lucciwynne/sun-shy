const moment = require('moment');

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

/*
const today = new Date();
const start = moment(today).startOf('day'); // 00:00 today
const end = moment(today).endOf('day'); // 23:59 today
const times = [];

while (start < end) {
    start.add(10, 'minutes');
    console.log(start);
    times.push(start);
}
*/