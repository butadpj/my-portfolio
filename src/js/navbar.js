const navbar = document.querySelector('nav');
const navbarBars = document.querySelector('.navbar-bars');
const navbarLogo = document.querySelector('.navbar-logo');
const navbarClose = document.querySelector('.navbar-close');
const navbarContent = document.querySelector('.navbar-content');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// navbarContent.style.height = window.outerHeight;

document.documentElement.style.setProperty(
  '--vh',
  `${window.innerHeight / 100}px`,
);

const BODY = document.documentElement || document.body;

navbarBars.addEventListener('click', () => {
  navbarContent.classList.add('show');
  navbarLogo.classList.add('hide');
});

navbarClose.addEventListener('click', () => {
  navbarContent.classList.remove('show');
  navbarLogo.classList.remove('hide');
});

// Close navbar-content when click outside
document.addEventListener('click', (e) => {
  if (!navbarContent.contains(e.target) && !navbarBars.contains(e.target)) {
    navbarContent.classList.remove('show');
    navbarLogo.classList.remove('hide');
  }
});

// Smooth section scrolling
if (navLinks.length > 0) {
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href');
      const section = document.querySelector(sectionId);

      // Scroll with offset
      BODY.scrollTop = section.offsetTop - 70;

      location.hash = sectionId;
    });
  });
}

// Active class for nav links
window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    if (section.offsetTop - 70 <= BODY.scrollTop) {
      const activeLinks = document.querySelectorAll('.nav-link.active');
      if (activeLinks.length > 0) activeLinks[0].classList.remove('active');

      const currentLink = document.querySelector(
        `.navbar-links a[href="#${section.id}"]`,
      );
      currentLink.classList.add('active');
    }

    if (section.id === 'contact' && BODY.scrollTop >= section.offsetTop - 70) {
      navbar.classList.add('hide');
      navbarContent.classList.remove('show');
    } else {
      navbar.classList.remove('hide');
      navbarLogo.classList.remove('hide');
    }
  });
});
