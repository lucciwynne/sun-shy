const SunCalc = require('suncalc');

export const getSunAlt = (lat, long) => {
    const today = new Date();

    const sunPosition = SunCalc.getPosition(today, lat, long);
    const sunAlt = Math.floor(sunPosition.altitude * (180 / Math.PI));

    return sunAlt;
};

export const displaySunAlt = (altitude) => {
    console.log(`The sun is ${altitude} degrees above the horizon`);
};
