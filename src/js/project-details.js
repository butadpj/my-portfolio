const goBack = document.querySelector('.go-back');

if (goBack)
  goBack.addEventListener('click', () => {
    history.back();
  });
