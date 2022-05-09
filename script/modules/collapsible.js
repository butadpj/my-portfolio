const collapse = document.querySelectorAll('.collapse');

if (collapse.length) {
  collapse.forEach((element) => {
    const collapseToggle = element.querySelector('.collapse-toggle');
    const collapseContent = element.querySelector('.collapse-content');

    // Initialize the maxHeight value
    if (collapseContent.classList.contains('open'))
      collapseContent.style.maxHeight = `${collapseContent.scrollHeight}px`;

    collapseToggle.addEventListener('click', () => {
      const isCollapseOpen = collapseContent.classList.contains('open');
      const toggleIcon = collapseToggle.querySelector('i');

      if (isCollapseOpen) {
        toggleIcon.classList.remove('fa-angle-down');
        toggleIcon.classList.add('fa-angle-right');
        collapseContent.classList.remove('open');
        collapseContent.style.maxHeight = 0;

        return;
      }

      toggleIcon.classList.remove('fa-angle-right');
      toggleIcon.classList.add('fa-angle-down');
      collapseContent.classList.add('open');
      collapseContent.style.maxHeight = `${collapseContent.scrollHeight}px`;
    });
  });
}
