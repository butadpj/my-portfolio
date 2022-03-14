window.addEventListener('scroll', () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  const parallaxOpacityElements =
    document.querySelectorAll('.parallax-opacity');

  const scrolled = window.pageYOffset;

  if (parallaxElements.length) {
    parallaxElements.forEach((element) => {
      const rate = element.dataset.rate;

      if (rate) {
        const pos = scrolled * (element.dataset.rate / 10);
        element.style.transform = `translate3d(0px, ${pos}px, 0px)`;
        return;
      }

      element.style.transform = `translate3d(0px, ${scrolled * -0.3}px, 0px)`;
    });
  }

  if (parallaxOpacityElements.length) {
    parallaxOpacityElements.forEach((element) => {
      const offset = element.offsetTop - 90;
      const opacity = (scrolled / offset - 1) * -1;
      element.style.opacity = opacity;

      const rate = element.dataset.rate;
      if (rate) {
        const pos = scrolled * (element.dataset.rate / 10);
        element.style.transform = `translate3d(0px, ${pos}px, 0px)`;
        return;
      }

      element.style.transform = `translate3d(0px, ${scrolled * -0.3}px, 0px)`;
    });
  }
});
