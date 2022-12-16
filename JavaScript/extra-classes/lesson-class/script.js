class SmoothScroll {
    constructor(links) {
        this.menuLinks = document.querySelectorAll(links)
        this.addClickEvent()
    }

    handleClick(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        window.scrollTo({
            top: section.offsetTop - 20,
            behavior: 'smooth'
        })
    }

    addClickEvent() {
        this.menuLinks.forEach((link) => {
            link.addEventListener('click', this.handleClick)
        })
    }
}

const scroll = new SmoothScroll('li a')