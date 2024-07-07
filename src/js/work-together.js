'use strict';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formElem: document.querySelector('.footer-form'),
  inputMailElem: document.querySelector('.footer-form-input-mail'),
  spanValidElem: document.querySelector('.valid-notification'),
  backDropElem: document.querySelector('.footer-backdrop'),
  closeModalElem: document.querySelector('.footer-modal-close-btn'),
  contentBoxModalElem: document.querySelector('.modal-content-box'),
  formSubmitBtnElem: document.querySelector('.form-submit-btn'),
  loaderWrapElem: document.querySelector('.loader-wrap'),
};

refs.formElem.addEventListener('input', event => {
  event.preventDefault();
  checkInputValidity();
  const formData = new FormData(refs.formElem);
  const email = formData.get('email');
  const comments = formData.get('comments');
  saveToLS('email', email);
  saveToLS('comments', comments);
});

window.addEventListener('DOMContentLoaded', event => {
  const email = loadFromLS('email');
  const comments = loadFromLS('comments');
  refs.formElem.elements.email.value = email;
  refs.formElem.elements.comments.value = comments;
});

refs.formElem.addEventListener('submit', async event => {
  event.preventDefault();
  if (
    refs.formElem.elements.email.value === '' ||
    !refs.formElem.elements.email.validity.valid
  ) {
    createErrorMailNotif();
  } else {
    const email = refs.formElem.elements.email.value.trim();
    const comment = refs.formElem.elements.comments.value.trim();
    const userData = { email, comment };
    clearNotifField();
    showLoader();
    try {
      const response = await createRequest(userData);
      const markup = modalTemplate(response);
      refs.contentBoxModalElem.insertAdjacentHTML('afterbegin', markup);
      hideLoader();
      refs.backDropElem.classList.remove('is-hidden');
      event.target.reset();
      localStorage.removeItem('email');
      localStorage.removeItem('comments');
    } catch (err) {
      iziToast.error(iziToastErrorObj);
    }
  }
});

refs.closeModalElem.addEventListener('click', event => {
  closeModal();
  refs.contentBoxModalElem.innerHTML = '';
});

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeModal();
    refs.contentBoxModalElem.innerHTML = '';
  }
});
refs.backDropElem.addEventListener('click', event => {
  closeModal();
  refs.contentBoxModalElem.innerHTML = '';
});
function closeModal() {
  refs.backDropElem.classList.add('is-hidden');
}

async function createRequest(data) {
  try {
    const res = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      data
    );
    return res;
  } catch (err) {
    console.log(err);
  }
}
function modalTemplate(response) {
  return `<h2 class="footer-modal-title">
      ${response.data.title}
    </h2>
    <p class="footer-modal-text">
      ${response.data.message}
    </p>`;
}

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch (err) {
    return json;
  }
}
function checkInputValidity() {
  if (!refs.formElem.elements.email.validity.valid) {
    refs.formSubmitBtnElem.setAttribute('disabled', '');
    createErrorMailNotif();
  } else {
    createMailSuccessNotif();
    refs.formSubmitBtnElem.removeAttribute('disabled', '');
  }
}

function createErrorMailNotif() {
  refs.inputMailElem.classList.add('input-error');
  refs.spanValidElem.classList.add('notif-error');
  refs.spanValidElem.textContent = 'Invalid email, try again';
}

function createMailSuccessNotif() {
  refs.spanValidElem.textContent = 'Success!';
  refs.inputMailElem.classList.remove('input-error');
  refs.spanValidElem.classList.remove('notif-error');
  refs.inputMailElem.classList.add('input-success');
}

function clearNotifField() {
  refs.spanValidElem.textContent = '';
  refs.inputMailElem.classList.remove('input-success');
  refs.spanValidElem.classList.remove('notif-success');
}

const iziToastErrorObj = {
  title: 'Error',
  message: `Sorry, something went wrong...`,
  backgroundColor: 'rgb(224, 55, 63)',
  titleColor: 'rgb(255, 255, 255)',
  messageColor: 'rgb(255, 255, 255)',
  messageSize: '16',
  iconColor: 'rgb(255, 255, 255)',
  theme: 'dark',
  progressBarColor: 'rgb(255, 255, 255)',
  position: 'topRight',
};

function showLoader() {
  refs.loaderWrapElem.classList.remove('is-hidden');
}

function hideLoader() {
  refs.loaderWrapElem.classList.add('is-hidden');
}
