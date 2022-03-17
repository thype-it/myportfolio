/////////////////////
//IMPORTS
//-------------------

//generator functions
import 'regenerator-runtime/runtime';
//sass
import '../scss/base.scss'
import * as classes from '../scss/base.scss';
document.body.className = classes.body;

//fullpage 
import fullpage from 'fullpage.js';

//lottie
import "@lottiefiles/lottie-player";

/////////////////////
//SETTINGS
//-------------------


//FULLPAGE SETTINGS
new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    lazyLoading: false,
    //navigation
    navigation: false,
    navigationTooltips: ['firstSlide', 'secondSlide'],

    slidesNavigation: true,
    //Behavior
    loopBottom: true

});

// LOTTIE ANIMATION
const player = document.querySelector("lottie-player");
player.addEventListener("rendered", (e) => {
  //Load via URL
  player.load("https://assets2.lottiefiles.com/packages/lf20_kyu7xb1v.json");
});



/////////////////////
//CHECKS
//-------------------


//HEIGHT CONTROL
let debounceTimer;

addEventListener('resize', ()=>{
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        checkHeight();
    }, 500);
})

function checkHeight() {
    let resize = document.body.querySelector('.resize');
    if (window.innerHeight < 505){resize.style.display = 'flex'}
    else if(resize){resize.style.display = 'none'};
};

checkHeight();