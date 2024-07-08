import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const projectsSwiper = new Swiper('.projects-swiper', {
  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
