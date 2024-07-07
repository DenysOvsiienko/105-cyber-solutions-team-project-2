import Swiper from 'swiper';
import 'swiper/css';

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

// Swiper
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.about-skills-circle');
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    swiperWrapper.appendChild(clone);
  });

  const swiper = new Swiper('.about-skills-swiper', {
    speed: 400,
    spaceBetween: 0,
    loop: true,
    setWrapperSize: true,
    breakpoints: {
      // Налаштування для десктопу
      1440: {
        slidesPerView: 6,
      },
      // Налаштування для планшету
      768: {
        slidesPerView: 3,
      },
      // Налаштування для мобільних пристроїв
      320: {
        slidesPerView: 2,
      },
    },
    on: {
      init: function () {
        document.querySelector('.swiper-slide').style.backgroundColor =
          '#ed3b44';
      },

      slideChange: function () {
        this.slides.forEach(slide => {
          slide.style.background = '';
        });
        const activeSlide = this.slides[this.activeIndex];
        activeSlide.style.backgroundColor = '#ed3b44';
      },
    },
  });

  swiper.update();
  const btnNext = document.querySelector('.about-skills-btn');
  btnNext.addEventListener('click', () => {
    swiper.slideNext();
  });
});
