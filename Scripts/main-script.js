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