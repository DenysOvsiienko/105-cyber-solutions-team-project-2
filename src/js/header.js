document.addEventListener('DOMContentLoaded', () => {
  const navMenuBtnElem = document.querySelector('.header-menu-btn');
  const navMenuListElem = document.querySelector('.header-menu-list');
  navMenuBtnElem.addEventListener('click', event => {
    event.stopPropagation();
    navMenuListElem.classList.toggle('visually-hidden');
    if (navMenuListElem.classList.contains('visually-hidden')) {
      navMenuListElem.removeAttribute('style');
    } else {
      navMenuListElem.style.opacity = '1';
    }
  });

  document.addEventListener('click', () => {
    navMenuListElem.classList.add('visually-hidden');
    navMenuListElem.removeAttribute('style');
  });
});
/* Back to Top button script */
document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('.back-to-top-btn')
    .addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;

    if (scrolled > 350) {
      document
        .querySelector('.back-to-top-btn')
        .classList.add('back-to-top-btn-active');
    } else {
      document
        .querySelector('.back-to-top-btn')
        .classList.remove('back-to-top-btn-active');
    }
  });
});
