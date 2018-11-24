const moment = require('moment');

export const getTime = (obj) => {
    const today = new Date();
    const result = moment(today).format('ddd, MMMM DD HH:mm');
    obj.date = result;
    return result;
};