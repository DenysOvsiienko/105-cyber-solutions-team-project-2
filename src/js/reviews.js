import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper/bundle';
import axios from 'axios';
import { createReviewsList } from './reviews-render-functions';
import 'swiper/css/bundle';
const urlapi = 'https://portfolio-js.b.goit.study/api/reviews';

const reviewlist = document.querySelector('.reviews-list');
const prevbtnEl = document.querySelector('.reviews-js-btn-prev');

// console.dir(prevbtnEl);
const nextbtnEl = document.querySelector('.reviews-js-btn-next');
// console.dir(nextbtnEl);
const prevsvgbtn = document.querySelectorAll('.reviews-js-icon-prev');
// console.dir(prevsvgbtn);
const nextsvgbtn = document.querySelectorAll('.reviews-js-icon-next');
// console.dir(nextsvgbtn);

const fetchReviews = async url => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Sorry, something went wrong. Please try again later.',
    });
    console.error('Data upload error:', error);

    return {};
  }
};
fetchReviews(urlapi).then(reviews => {
  // console.log('Отримані відгуки:', reviews);
  if (reviews.length === 0) {
    reviewlist.innerHTML = '<p>Not found</p>';
  } else {
    reviewlist.innerHTML = createReviewsList(reviews);
  }
  const reviewsSwiper = new Swiper('.swiper-reviews', {
    modules: Navigation,
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    touch: true,
    wrapperClass: 'reviews-list',
    slideClass: 'reviews-item',
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
    },
    navigation: {
      nextEl: '.reviews-js-btn-next',
      prevEl: '.reviews-js-btn-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
});
