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
