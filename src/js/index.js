import { getSunAlt } from './SunAlt';

const user = {};

const setPosition = () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            user.lat = position.coords.latitude;
            user.long = position.coords.longitude;

            user.sunAlt = getSunAlt(user.lat, user.long);
            console.log(user.sunAlt);
        });
    }
};
setPosition();
