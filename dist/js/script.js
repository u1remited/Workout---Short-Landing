function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 1400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

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