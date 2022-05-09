const scrollToTopButtons = document.querySelectorAll('.scrollToTop');

if (scrollToTopButtons.length)
  scrollToTopButtons.forEach((button) => {
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
