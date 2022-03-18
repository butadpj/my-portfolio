import './parallax';
import './collapsible';
import './navbar';
import './project-details';
import * as lib from './butter';

lib.butter.init({
  cancelOnTouch: true,
  wrapperDamper: 0.05,
});

const scrollToTopButtons = document.querySelectorAll('.scrollToTop');

if (scrollToTopButtons.length)
  scrollToTopButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // document.body.scro
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
