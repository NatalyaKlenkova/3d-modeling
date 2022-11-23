// Burger
let menu = document.querySelector('.header__nav');
let burger = document.querySelector('.burger');
let closeBtn = document.querySelector('.close');
let menuLink = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {

    menu.classList.add('header__nav--active');

    document.body.classList.add('stop-scroll');
});

closeBtn.addEventListener('click', function() {

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
});

menuLink.forEach(function(elem) {
    elem.addEventListener('click', function() {

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');
    })
})