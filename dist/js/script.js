// Scroll Up

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 1400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

function scrollUpMobile(){
    const scrollUpMobile = document.getElementById('scroll-up-mobile');
    if(this.scrollY >= 1400) scrollUpMobile.classList.add('show-scroll-mobile'); else scrollUpMobile.classList.remove('show-scroll-mobile');
}
window.addEventListener('scroll', scrollUpMobile);


// Burger menu

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__list'),
    menuItem = document.querySelectorAll('.nav__item'),
    hamburger = document.querySelector('.nav__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('nav__burger_active');
        menu.classList.toggle('nav__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('nav__burger_active');
            menu.classList.toggle('nav__list_active');
        });
    });
});


// Fixed menu animation

window.addEventListener('scroll', e => {
    const navBar = document.getElementById('navbar').classList;
    const activeClass = "nav__container_fixed";
    
    if(scrollY > 600) navBar.add(activeClass);
    else navBar.remove(activeClass);
});
