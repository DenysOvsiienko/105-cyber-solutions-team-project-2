document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item-about-me');

  accordionItems.forEach((item, index) => {
    const trigger = item.querySelector('.aboutme-accordion-trigger');
    const panel = item.querySelector('.accordion-panel-about-me');

    if (index !== 0) {
      item.classList.remove('is-active');
      panel.style.display = 'none';
    }

    trigger.addEventListener('click', function () {
      const isOpen = item.classList.contains('is-active');

      // accordionItems.forEach(i => {
      //   i.classList.remove('is-active');
      //   i.querySelector('.aboutme-accordion-panel').style.display = 'none';
      // });

      // if (!isOpen) {
      //   item.classList.add('is-active');
      //   panel.style.display = 'flex';
      // }

      if (isOpen) {
        item.classList.remove('is-active');
        panel.style.display = 'none';
      } else {
        item.classList.add('is-active');
        panel.style.display = 'flex';
      }
    });
  });
});
