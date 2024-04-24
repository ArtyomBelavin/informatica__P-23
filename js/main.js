const burgerBtn = document.querySelector('.burger');
const menuItems = document.querySelector('.menu__list');

burgerBtn.addEventListener('click', function () {
    menuItems.classList.toggle('menu__show');
});

