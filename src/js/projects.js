import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.projects-swiper', {
  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
});
