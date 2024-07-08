import Swiper from 'swiper';
import 'swiper/css';
import Accordion from 'accordion-js';

// import 'accordion-js/dist/accordion.min.css';
const aboutMeAccordion = new Accordion('.about-me-accordion-container', {
  duration: 400,
  showMultiple: true,
  openOnInit: [0],
  elementClass: 'about-me-accordion-item',
  triggerClass: 'block-about-me',
  panelClass: 'about-me-accordion-panel',
});

// // Swiper

// document.addEventListener('DOMContentLoaded', function () {
//   const slides = document.querySelectorAll('.about-skills-circle');
//   const swiperWrapper = document.querySelector('.swiper-wrapper');
//   slides.forEach(slide => {
//     const clone = slide.cloneNode(true);
//     swiperWrapper.appendChild(clone);
//   });

//   const aboutMeSwiper = new Swiper('.about-skills-swiper', {
//     speed: 400,
//     spaceBetween: 0,
//     loop: true,
//     setWrapperSize: true,
//     breakpoints: {
//       // Налаштування для десктопу
//       1440: {
//         slidesPerView: 6,
//       },
//       // Налаштування для планшету
//       768: {
//         slidesPerView: 3,
//       },
//       // Налаштування для мобільних пристроїв
//       320: {
//         slidesPerView: 2,
//       },
//     },
//     on: {
//       init: function () {
//         document.querySelector('.swiper-slide').style.backgroundColor =
//           '#ed3b44';
//       },

//       slideChange: function () {
//         this.slides.forEach(slide => {
//           slide.style.background = '';
//         });
//         const activeSlide = this.slides[this.activeIndex];
//         activeSlide.style.backgroundColor = '#ed3b44';
//       },
//     },
//   });

//   aboutMeSwiper.update();
//   const btnNext = document.querySelector('.about-skills-btn');
//   btnNext.addEventListener('click', () => {
//     aboutMeSwiper.slideNext();
//   });
// });

const aboutMeSwiper = new Swiper('.about-skills-swiper', {
  loop: true,
  touch: true,
  spaceBetween: 0,
  slidesPerView: 2,
  direction: 'horizontal',
  slideClass: 'about-skills-circle',
  wrapperClass: 'about-skills-list',
  slideActiveClass: 'about-skills-circle-active',
  navigation: {
    nextEl: '.about-skills-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});
