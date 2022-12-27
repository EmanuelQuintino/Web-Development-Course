window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if(window.scrollY > 150) {
        const containerTechnologies = document.querySelectorAll(".containerTechnologies li");
        containerTechnologies.forEach(element => {
            element.classList.add("pulsarAnimation")
        });
    }

    if(window.scrollY > 200) {
        const anotherSubjects = document.querySelector(".anotherSubjects");
            anotherSubjects.classList.add("downTopAnimation")
    }

    if(window.scrollY > 440) {
        const projects = document.querySelector(".projects");
        projects.classList.add("downTopAnimation")
    }

    if(window.scrollY > 920) {
        const instructorPerfil = document.querySelector(".instructorPerfil");
        instructorPerfil.classList.add("opacityAnimation")
    }

    if(window.scrollY > 1120) {
        const education = document.querySelector(".education");
        education.classList.add("downTopAnimation")
    }

    if(window.scrollY > 1220) {
        const containerContacts = document.querySelector(".containerContacts");
        containerContacts.classList.add("downTopAnimation")
    }

    if(window.scrollY > 1500) {
        const footer = document.querySelector("footer");
        footer.classList.add("pulsarAnimation")
    }
});