const myHeader = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY && window.scrollY >= 100) {
        console.log("Down");
        myHeader.classList.add("headerHidden")
    }
    else {
        console.log("Up");
        myHeader.classList.remove("headerHidden")
    };

    lastScrollY = window.scrollY
});