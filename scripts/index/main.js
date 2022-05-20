import '../modules/scrollToTop.js';
import '../modules/navbar.js';
import '../modules/collapsible.js';
import '../modules/parallax.js';
import Butter from 'butter-es6';

Butter.init({
  wrapperId: 'butter',
  cancelOnTouch: true,
  wrapperDamper: 0.05,
});
