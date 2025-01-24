// Variables
const slider = document.getElementById("carousel-container");
const SCROLL_SPEED = 2;
let isDown = false;
let startX, scrollLeft;


for(let element of document.getElementsByClassName("carousel-image")) {
    element.setAttribute("draggable", false);
}

/* FadeIn animation on scroll =======================
https://stackoverflow.com/questions/27462306/css3-animate-elements-if-visible-in-viewport-page-scroll */

document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) {
        const animatedBoxes = document.getElementsByClassName("fadeInElement");
        const windowOffsetTop = window.innerHeight + window.scrollY;

        animatedBoxes.forEach(animatedBox => {
            const animatedBoxOffsetTop = animatedBox.offsetTop;

            if (windowOffsetTop >= animatedBoxOffsetTop) {
                addClass(animatedBox, "fade-in");
            }
        });
    });
});

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

