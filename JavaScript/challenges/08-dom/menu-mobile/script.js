const menuButton = document.querySelector("#menuButton")

function toogleMenu(event) {
    if (event.type == "touchstart") event.preventDefault()

    const nav = document.querySelector("#nav")
    nav.classList.toggle("active")
}

menuButton.addEventListener("click", toogleMenu)
menuButton.addEventListener("touchstart", toogleMenu)