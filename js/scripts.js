// window.onload = function() {
//     document.getElementById("loading").style.display = "none";
// }

// loader
window.onload = function loadingTimeout() {
    setTimeout(loadingDone, 1000);
}

function loadingDone() {
    document.getElementById('loading').style.display = 'none';
}

//  hamburger menu
const hamburger = document.querySelector('#hamburger');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeBtn = document.querySelector('.close-btn');

function openNav() {
    hamburger.style.height = '100%';
}

function closeNav() {
    hamburger.style.height = '0%';
}

hamburgerIcon.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
