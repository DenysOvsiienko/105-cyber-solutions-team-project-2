document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('benefits-modal');
  const modalTitle = document.getElementById('benefits-modal-title');
  const modalText = document.getElementById('benefits-modal-text');
  const modalSvg = document.querySelector('.benefits-modal-svg');
  const body = document.body;

  function openModal() {
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    body.style.overflow = 'auto';
  }

  document.querySelectorAll('.benefits-item').forEach(item => {
    item.addEventListener('click', () => {
      modalTitle.textContent = item.getAttribute('data-modal-title');
      modalText.textContent = item.getAttribute('data-modal-text');

      const svgIcon = item.querySelector('svg').cloneNode(true);
      modalSvg.innerHTML = '';
      modalSvg.appendChild(svgIcon);

      openModal();
      document.body.style.overflow = 'hidden';
    });
  });

  document
    .querySelector('.benefits-modal-close')
    .addEventListener('click', () => {
      closeModal();
      document.body.removeAttribute('style');
    });

  window.addEventListener('click', event => {
    if (event.target == modal) {
      closeModal();
      document.body.removeAttribute('style');
    }
  });

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
      document.body.removeAttribute('style');
    }
  });
});
