document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");
        menuIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuIcon.setAttribute("class", "ri-menu-line");
    });

    const scrollRevealOption = {
    distance: "50px",
    origin:"bottom",
    duration: 1000,
};





//header container
scrollReveal().reveal(".header__container p", { 
    ...scrollRevealOption,
});

scrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

//about container
scrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left"
});

scrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

scrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

scrollReveal().reveal(".about__content .description", {
    ...scrollRevealOption,
    delay: 1500,
});

scrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
});
});