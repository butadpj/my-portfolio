import './parallax';
import './collapsible';
import './navbar';
import * as lib from './butter';

lib.butter.init({
  cancelOnTouch: true,
  wrapperDamper: 0.05,
});

const setDocHeight = () => {
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight / 100}px`,
  );
};

window.addEventListener('resize', setDocHeight);
window.addEventListener('orientationchange', setDocHeight);

setDocHeight();
