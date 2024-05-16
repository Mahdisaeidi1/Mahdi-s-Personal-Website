const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navClose = document.querySelector('.nav-close-btn');

const navToggleFunc = () => nav.classList.toggle('active');
navMenuBtn.addEventListener('click', navToggleFunc);
navClose.addEventListener('click', navToggleFunc);