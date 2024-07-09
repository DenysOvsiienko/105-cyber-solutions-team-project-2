document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');
  const closeModal = document.querySelector('.close');
  const modalSvg = document.querySelector('.modal-svg');

  document.querySelectorAll('.benefits-item').forEach(item => {
    item.addEventListener('click', function() {
      const title = this.getAttribute('data-modal-title');
      const text = this.getAttribute('data-modal-text');
      const svgHref = this.getAttribute('data-modal-svg');
      
      modalTitle.textContent = title;
      modalText.textContent = text;

      
      modalSvg.innerHTML = `<svg width="24" height="24"><use href="./img/icons.svg${svgHref}"></use></svg>`;

      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
