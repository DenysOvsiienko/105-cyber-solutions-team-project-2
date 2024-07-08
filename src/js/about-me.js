import Swiper from 'swiper';
import 'swiper/css';
import Accordion from 'accordion-js';

import 'accordion-js/dist/accordion.min.css';
const aboutMeAccordion = new Accordion('.accordion-container-about-me', {
  duration: 600,
  showMultiple: true,
  openOnInit: [0],
  elementClass: 'accordion-item-about-me',
  triggerClass: 'accordion-trigger-about-me',
  panelClass: 'accordion-panel-about-me',
});

// // Swiper

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
