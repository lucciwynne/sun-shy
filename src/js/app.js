// CSS import
import '../sass/main.scss';

// JS imports
import { getSunAlt } from './models/SunAlt';
import { getTime } from './models/Time';
import { displaySunAlt, clearResults } from './views/sunAltView';
import { elements } from './views/base';

async function setPosition() {
    const user = {};
    
    if ('geolocation' in navigator) {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
              resolve(position);
            });
        });
        //console.log(pos);

        setCoords(user, pos);
        
        user.sunAlt = getSunAlt(user.lat, user.long);
        
        //clearResults();
        getTime();
        //displaySunAlt(user.sunAlt);

        //console.log(user);
    }
};

function setCoords(obj, position) {
    obj.lat = position.coords.latitude;
    obj.long = position.coords.longitude;
}

elements.btn.addEventListener('click', setPosition);

//
let rotation = 0;
elements.btn.addEventListener('click', () => {
    rotation -= 720;
    const cards = document.querySelectorAll('.data__card');
    
    cards.forEach(card => {
        card.style.transform = `perspective(600px) rotateX(${rotation}deg)`;
        console.log(rotation);
    });
});

