const SunCalc = require('suncalc');

export const getSunAlt = (lat, long) => {
    const today = new Date();

    const sunPosition = SunCalc.getPosition(today, lat, long);
    const sunAlt = Math.floor(sunPosition.altitude * (180 / Math.PI));

    return sunAlt;
};

export const displaySunAlt = (altitude) => {

    if (altitude < 0) {
        console.log(`The sun is below the horizon, you have nothing to worry about!`);
    } else if (0 < altitude < 50) {
        console.log(`The sun is only ${altitude} degrees above the horizon. Protect yourself!`);
    } else if (altitude > 50) {
        console.log(`The sun is ${altitude} degrees above the horizon. Go out and get a bit of vitamin D!`);
    }
    
};
