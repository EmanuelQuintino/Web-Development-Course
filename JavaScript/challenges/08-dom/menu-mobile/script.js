const menuButton = document.querySelector("#menuButton")

menuButton.addEventListener("click", () => {
    const nav = document.querySelector("#nav")
    nav.classList.toggle("active")
})