const SunCalc = require('suncalc');

export const getSunAlt = () => {

    let userLat, userLong, sunPosition, sunAlt;
    let today = new Date();
    
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            
            userLat = position.coords.latitude;
            userLong = position.coords.longitude;
    
            sunPosition = SunCalc.getPosition(today, userLat, userLong);
            sunAlt = Math.floor(sunPosition.altitude * (180 / Math.PI));
    
            if (sunAlt < 0) {
                console.log('The sun is currently below the horizon so you\'re safe from its evil rays!');
            } else if (sunAlt >= 50) {
                console.log('It is high enough above the horizon that UVB is present. It\'s safe to get some exposure now to produce vitamin D!');
            } else if (0 < sunAlt < 50) {
                console.log(`The sun is currently ${sunAlt} degrees above the horizon.`);
                console.log('It is less than 50 degrees above the horizon, which means it is EVIL! Wear sunscreen and/or protective clothing to prevent sun damage and premature aging.');
            }
    
        });
    } 

}; 
