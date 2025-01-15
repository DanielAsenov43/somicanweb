let container, closeSVG, buttons;

window.onload = () => {
    // Setting the elements
    container = document.getElementById("cookies-container");
    closeSVG = document.getElementById("cookies-close-svg");
    buttons = document.getElementById("cookies-row-buttons").children;

    // Adding listeners to everything
    closeSVG.addEventListener("click", close_cookies);
    for(let i = 0; i < buttons.length; i++) buttons[i].addEventListener("click", close_cookies);
}

// Closing the cookies menu with a cool animation, then deleting the element
function close_cookies() {
    container.style.transitionDuration = "0.2s"; // Move up in 0.15s
    container.style.bottom = "5%";
    setTimeout(() => {
        container.style.transitionDuration = "0.5s"; // Move down in 0.5s
        container.style.transitionTimingFunction = "ease-in";
        container.style.bottom = "-1000px";
    }, 200);
    setTimeout(() => {
        container.remove(); // Remove the element
    }, 700);
}