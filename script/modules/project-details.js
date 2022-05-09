import './navbar.js';
import './scrollToTop.js';
import Butter from 'butter-es6';

new Swiper('.mySwiper', {
  speed: 600,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

Butter.init({
  wrapperId: 'butter',
  cancelOnTouch: true,
  wrapperDamper: 0.05,
});

const goBack = document.querySelector('.go-back');

if (goBack)
  goBack.addEventListener('click', () => {
    history.back();
  });
