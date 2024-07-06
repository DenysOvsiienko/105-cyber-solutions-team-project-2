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
};
console.log(refs.formSubmitBtnElem);
refs.inputMailElem.addEventListener('input', event => {
  if (!refs.inputMailElem.validity.valid) {
    refs.formSubmitBtnElem.setAttribute('disabled', '');
    createErrorMailNotif();
  } else {
    createMailSuccessNotif();
    refs.formSubmitBtnElem.removeAttribute('disabled', '');
  }
});

refs.formElem.addEventListener('submit', async event => {
  event.preventDefault();
  if (refs.formElem.elements.email.value === '') {
    createEmptyFieldNotif();
  } else if (refs.inputMailElem.validity.valid) {
    const email = refs.formElem.elements.email.value.trim();
    const comment = refs.formElem.elements.comments.value.trim();
    const userData = { email, comment };
    console.log(userData);
    clearNotifField();
    try {
      const response = await createRequest(userData);
      console.log(response);
      const markup = modalTemplate(response);
      refs.contentBoxModalElem.insertAdjacentHTML('afterbegin', markup);
      refs.backDropElem.classList.remove('is-hidden');
    } catch (err) {
      iziToast.error(iziToastErrorObj);
    }
  }
  event.target.reset();
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

function createEmptyFieldNotif() {
  refs.inputMailElem.classList.add('input-error');
  refs.spanValidElem.classList.add('notif-error');
  refs.spanValidElem.textContent = 'Please, complete email field';
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
