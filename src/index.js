//Declarations and intializations
var playButtonEl = document.querySelector("#play");
var backButtonEl = document.querySelector("#back-button");
var homePageEl = document.querySelector(".home");
//Handlers
var showHomePage = function (displayHome) {
    homePageEl.style.display = displayHome ? 'block' : 'none';
};
//Events
playButtonEl.addEventListener("click", function () { return showHomePage(false); });
backButtonEl.addEventListener("click", function () { return showHomePage(true); });
