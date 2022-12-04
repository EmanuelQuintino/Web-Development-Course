const mobileButton = document.querySelector("#mobileButton")

mobileButton.addEventListener("click", () => {
    const nav = document.querySelector("#nav")
    nav.classList.toggle("active")
})