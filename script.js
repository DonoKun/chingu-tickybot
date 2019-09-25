
// fade in
window.onload = function() {
    document.querySelector('#fade').style.opacity = 1;
}

window.onscroll = function() {
    document.querySelector('.how-it-works-wrapper').style.opacity = 1;
}

// smooth scroll
const scroll = new SmoothScroll('.navbar, a[href*="#"]', 
    {speed: 1000}
);
