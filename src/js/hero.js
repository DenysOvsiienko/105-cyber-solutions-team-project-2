document.addEventListener('DOMContentLoaded', function () {
  const headerSpanFirst = document.querySelector('.hero-title-animation-first');
  const headerSpanSecond = document.querySelector(
    '.hero-title-animation-second'
  );
  const headerSpanThird = document.querySelector('.hero-title-animation-third');
  headerSpanFirst.classList.add('hero-title-visible');
  headerSpanSecond.classList.add('hero-title-visible');
  headerSpanThird.classList.add('hero-title-visible');
});
