document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-menu-btn');
  const menuClose = document.getElementById('menu-close');
  const menu = document.getElementById('mobile-menu');
  const menuLinks = menu.querySelectorAll('a');

  function openMenu() {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
  }

  function closeMenu() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  menuToggle.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
