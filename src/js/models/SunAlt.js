
const SunCalc = require('suncalc');

export const getSunAlt = (date, lat, long) => {

    const sunPosition = SunCalc.getPosition(date, lat, long);
    const sunAlt = Math.floor(sunPosition.altitude * (180 / Math.PI));

    return sunAlt;
};


