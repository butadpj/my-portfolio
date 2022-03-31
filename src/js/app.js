import './navbar';
import * as lib from './butter';

lib.butter.init({
  wrapperId: 'butter',
  cancelOnTouch: true,
  wrapperDamper: 0.05,
});

const scrollToTopButtons = document.querySelectorAll('.scrollToTop');

if (scrollToTopButtons.length)
  scrollToTopButtons.forEach((button) => {
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
