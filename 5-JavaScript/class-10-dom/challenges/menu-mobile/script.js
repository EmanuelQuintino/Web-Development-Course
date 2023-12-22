const menuButton = document.querySelector("#menuButton")

function toogleMenu(event) {
    if (event.type == "touchstart") event.preventDefault()

    const nav = document.querySelector("#nav")
    nav.classList.toggle("active")

    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)

    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar menu")
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir menu")
    }
}

menuButton.addEventListener("click", toogleMenu)
menuButton.addEventListener("touchstart", toogleMenu)