//Declarations and intializations

const playButtonEl = document.querySelector("#play") as HTMLButtonElement;
const backButtonEl = document.querySelector("#back-button") as HTMLButtonElement;
const homePageEl = document.querySelector(".home") as HTMLDivElement;

//Handlers

const showHomePage=(displayHome:boolean)=>{
    homePageEl.style.display=displayHome?'block':'none';
}

//Events

playButtonEl.addEventListener("click",()=>showHomePage(false));
backButtonEl.addEventListener("click",()=>showHomePage(true));

