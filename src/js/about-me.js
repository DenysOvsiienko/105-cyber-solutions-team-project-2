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
