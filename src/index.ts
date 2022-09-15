// import Knife from "./objects/knife";

//Declarations and intializations
const playButtonEl = document.querySelector("#play") as HTMLButtonElement;
const backButtonEl = document.querySelector("#back-button") as HTMLButtonElement;
const homePageEl = document.querySelector(".home") as HTMLDivElement;
const playAreaEl = document.querySelector(".play-area") as HTMLDivElement;
const knifeAreaEl = document.querySelector(".knife") as HTMLDivElement;
const knifeSVG = `
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="957.000000pt" height="1280.000000pt"
                    viewBox="0 0 957.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                    <metadata>
                        Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000"
                        stroke="none">
                        <path d="M103 12655 c12 -242 50 -518 113 -829 147 -717 429 -1388 806 -1919
226 -318 2366 -2907 3093 -3742 241 -276 308 -340 425 -398 l90 -45 -34 -26
c-127 -96 -137 -413 -24 -765 34 -106 66 -176 138 -296 26 -44 70 -118 96
-164 27 -46 68 -100 91 -121 63 -55 110 -65 231 -50 120 16 312 8 397 -15 80
-22 245 -102 322 -156 331 -235 542 -554 1681 -2540 432 -754 440 -768 527
-841 98 -82 222 -164 294 -193 33 -14 102 -32 153 -40 128 -22 409 -30 535
-16 279 30 358 110 454 456 39 143 41 155 35 250 -20 369 -199 1170 -343 1535
-196 498 -975 1771 -1313 2145 -315 349 -717 1034 -859 1464 -62 188 -112 271
-214 360 -110 95 -228 141 -378 148 l-107 6 -103 151 c-199 289 -456 632 -633
846 -192 231 -257 294 -986 946 -728 652 -4422 3933 -4474 3974 -19 15 -19 11
-13 -125z" />
                    </g>
                </svg>`;

let knifeRemaining = 6;

//Handlers

const showHomePage = (displayHome: boolean) => {
    homePageEl.style.display = displayHome ? 'block' : 'none';
}

const shootKnife = () => {
    console.log("body clicked");
    if (knifeRemaining>0) {
        //shoot knife
        // const knifeEl = knifeSVG;
        // knifeAreaEl.insertAdjacentElement('afterbegin',knifeEl);
        // const knife = new Knife();
        knifeAreaEl.innerHTML=knifeSVG;
        --knifeRemaining;
    } else {
        //restart and show retry modal
        console.log('finsished',knifeRemaining);
    }
}

//Events

playButtonEl.addEventListener("click", () => showHomePage(false));
backButtonEl.addEventListener("click", () => showHomePage(true));
document.body.addEventListener("click", shootKnife);

