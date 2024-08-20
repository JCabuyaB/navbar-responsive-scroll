// mostrar y ocultar    menu
const mobileMenuContainer = document.querySelector(".navigation-container");

const mobileMenu = document.querySelector(".mobile-navigation");

// mostrar menu mobile
const mobileBtn = document.querySelector(".mobile-navbar__btn");
mobileBtn.addEventListener("click", () => {
    const heightMenuContainer =
        mobileMenuContainer.getBoundingClientRect().height;
    const heightNavigation = mobileMenu.getBoundingClientRect().height;

    if (heightMenuContainer == 0) {
        mobileMenuContainer.style.height = `${heightNavigation}px`;
    } else {
        mobileMenuContainer.style.height = "0px";
    }
});

// fijar la barra de navegacion
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const navbarHeight = navbar.getBoundingClientRect().height;

    const scrollHeight = window.scrollY;
    if (scrollHeight >= navbarHeight) {
        navbar.classList.add("navbar-sticky");
        navbar.classList.remove("navbar-transparent");
    } else {
        navbar.classList.add("navbar-transparent");
        navbar.classList.remove("navbar-sticky");
    }

    // top btn
    const topBtn = document.querySelector(".top-btn");
    if (scrollHeight > 500) {
        topBtn.classList.add("top-btn--show");
    } else {
        topBtn.classList.remove("top-btn--show");
    }
});

// links
const navLinks = document.querySelectorAll(".nav-anchor");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // ir a un punto especifico
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        // alturas
        const navHeight = navbar.getBoundingClientRect().height;
        // section height
        // fixed nav
        const mobileHeight = document
            .querySelector(".nav-mobile-container")
            .getBoundingClientRect().height;

        const menuContainerHeight =
            mobileMenuContainer.getBoundingClientRect().height;


        let position = 0;
        if (navHeight !== 0) {
            position = element.offsetTop - navHeight;
        }else{
            position = element.offsetTop - (mobileHeight - menuContainerHeight);
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        mobileMenuContainer.style.height = "0";
    });
});
