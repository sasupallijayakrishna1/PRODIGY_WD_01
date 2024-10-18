
const navbar = document.getElementById('navbar');


const navbarOffset = navbar.offsetTop;

function navbarScroll() {
    if (window.scrollY >= navbarOffset) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
}

window.addEventListener('scroll', navbarScroll);