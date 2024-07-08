import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const coversImg = document.querySelector('.marquee');

coversImg.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const modalImg = basicLightbox.create(
    `<img class="basic-img" srcset="${event.target.previousElementSibling.previousElementSibling.srcset}">`,
    {
      onShow: modalImg => {
        window.addEventListener('keydown', escBtn);
      },
      onClose: modalImg => {
        window.removeEventListener('keydown', escBtn);
      },
    }
  );

  modalImg.show();
  function escBtn(event) {
    if (event.code === 'Escape') {
      modalImg.close();
    }
  }
}

function initCoversSection() {
  const covers = document.querySelector('.section-cover');
  const animatesEl = document.querySelectorAll('.marquee-line');
  const addAnimationClass = () => {
    animatesEl.forEach(animationEL => {
      animationEL.classList.add('animated');
    });
  };
  const removeAnimationClass = () => {
    animatesEl.forEach(animationEL => {
      animationEL.classList.remove('animated');
    });
  };
  const followUser = new IntersectionObserver(watch => {
    watch.forEach(youHere => {
      if (youHere.isIntersecting) {
        addAnimationClass();
      } else {
        removeAnimationClass();
      }
    });
  });
  followUser.observe(covers);
}
initCoversSection();
