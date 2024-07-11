document.addEventListener('DOMContentLoaded', themeChecker);

function themeChecker() {
  const storedTheme = localStorage.getItem('theme') || 'red';
  const themeIndex = {
    red: 0,
    green: 1,
    blue: 2,
    coral: 3,
    'dark-cyan': 4,
    orange: 5,
  };
  if (themes[storedTheme]) {
    themes[storedTheme]();
    themeColorSwitcherFormElem.elements[themeIndex[storedTheme]].checked = true;
  } else {
    applyRedTheme();
    themeColorSwitcherFormElem.elements[0].checked = true;
  }
}

function applyRedTheme() {
  document.body.classList.add('red');
  localStorage.setItem('theme', 'red');
}
function applyGreenTheme() {
  document.body.classList.add('green');
  localStorage.setItem('theme', 'green');
}
function applyBlueTheme() {
  document.body.classList.add('blue');
  localStorage.setItem('theme', 'blue');
}
function applyCoralTheme() {
  document.body.classList.add('coral');
  localStorage.setItem('theme', 'coral');
}
function applyDarkCyanTheme() {
  document.body.classList.add('dark-cyan');
  localStorage.setItem('theme', 'dark-cyan');
}
function applyOrangeTheme() {
  document.body.classList.add('orange');
  localStorage.setItem('theme', 'orange');
}
const themeColorSwitcherFormElem = document.querySelector('.theme-color-form');
const themeIcon = document.querySelector('.theme-change-icon');
const bodyElem = document.body;
const themes = {
  red: applyRedTheme,
  green: applyGreenTheme,
  blue: applyBlueTheme,
  coral: applyCoralTheme,
  'dark-cyan': applyDarkCyanTheme,
  orange: applyOrangeTheme,
};
themeIcon.addEventListener('click', event => {
  themeIcon.classList.add('visually-hidden');
  event.stopPropagation();
  themeColorSwitcherFormElem.classList.toggle('visually-hidden');
  if (themeColorSwitcherFormElem.classList.contains('visually-hidden')) {
    themeColorSwitcherFormElem.removeAttribute('style');
  } else {
    themeColorSwitcherFormElem.style.opacity = '1';
  }
});
const themeInputsElems = document.querySelectorAll('input[name="themeColor"]');
themeInputsElems.forEach((input, index) => {
  input.addEventListener('click', event => {
    const theme = event.target.value;
    if (themes[theme]) {
      bodyElem.className = '';
      themes[theme]();
      themeColorSwitcherFormElem.classList.add('visually-hidden');
      themeIcon.classList.remove('visually-hidden');
      themeColorSwitcherFormElem.elements[index].checked = true;
      themeColorSwitcherFormElem.removeAttribute('style');
    }
  });
});
document.addEventListener('click', event => {
  if (
    !themeColorSwitcherFormElem.contains(event.target) &&
    !themeIcon.contains(event.target)
  ) {
    themeColorSwitcherFormElem.classList.add('visually-hidden');
    themeIcon.classList.remove('visually-hidden');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    themeColorSwitcherFormElem.classList.add('visually-hidden');
    themeIcon.classList.remove('visually-hidden');
  }
});
