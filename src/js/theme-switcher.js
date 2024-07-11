document.addEventListener('DOMContentLoaded', themeChecker);
const themeColorSwitcherElem = document.querySelector('theme-color-form');
function themeChecker() {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'red') {
      applyRedTheme();
      themeColorSwitcherFormElem.elements[0].checked = true;
    } else if (localStorage.getItem('theme') === 'green') {
      applyGreenTheme();
      themeColorSwitcherFormElem.elements[1].checked = true;
    } else if (localStorage.getItem('theme') === 'blue') {
      applyBlueTheme();
      themeColorSwitcherFormElem.elements[2].checked = true;
    } else if (localStorage.getItem('theme') === 'coral') {
      applyCoralTheme();
      themeColorSwitcherFormElem.elements[3].checked = true;
    } else if (localStorage.getItem('theme') === 'dark-cyan') {
      applyDarkCyanTheme();
      themeColorSwitcherFormElem.elements[4].checked = true;
    } else if (localStorage.getItem('theme') === 'orange') {
      applyOrangeTheme();
      themeColorSwitcherFormElem.elements[5].checked = true;
    }
  } else {
    applyRedTheme();
    themeColorSwitcherFormElem.elements[0].checked = true;
  }
}

function applyRedTheme() {
  const body = document.body;
  // body.classList.className = '';
  body.classList.add('red');
  localStorage.setItem('theme', 'red');
}
function applyGreenTheme() {
  const body = document.body;
  // body.classList.className = '';
  body.classList.add('green');
  localStorage.setItem('theme', 'green');
}
function applyBlueTheme() {
  const body = document.body;
  //   body.classList.className = '';
  body.classList.add('blue');
  localStorage.setItem('theme', 'blue');
}
function applyCoralTheme() {
  const body = document.body;
  //   body.classList.className = '';
  body.classList.add('coral');
  localStorage.setItem('theme', 'coral');
}
function applyDarkCyanTheme() {
  const body = document.body;
  //   body.classList.className = '';
  body.classList.add('dark-cyan');
  localStorage.setItem('theme', 'dark-cyan');
}
function applyOrangeTheme() {
  const body = document.body;
  //   body.classList.className = 'orange';
  body.classList.add('orange');
  localStorage.setItem('theme', 'orange');
}
