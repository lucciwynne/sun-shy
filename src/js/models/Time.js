const moment = require('moment');

export const getTime = () => {
    const today = new Date();
    const result = moment(today).format('ddd, MMMM DD HH:mm');
    console.log(result);
};