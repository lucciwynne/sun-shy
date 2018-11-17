import { getSunAlt, displaySunAlt } from './SunAlt';

const user = {};

async function setPosition() {
    if ('geolocation' in navigator) {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
              resolve(position);
            });
        });
        //console.log(pos);

        user.lat = pos.coords.latitude;
        user.long = pos.coords.longitude;
        
        user.sunAlt = getSunAlt(user.lat, user.long);
        displaySunAlt(user.sunAlt);
        
        //console.log(user);
    }
};
setPosition();
