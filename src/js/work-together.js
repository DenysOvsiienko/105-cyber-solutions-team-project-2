'use strict';
import axios from 'axios';

const refs = {
  formElem: document.querySelector('.footer-form'),
  inputMailElem: document.querySelector('.footer-form-input-mail'),
  spanValidElem: document.querySelector('.valid-notification'),
  backDropElem: document.querySelector('.footer-backdrop'),
  closeModalElem: document.querySelector('.footer-modal-close-btn'),
  contentBoxModalElem: document.querySelector('.modal-content-box'),
};

refs.inputMailElem.addEventListener('input', event => {
  if (!refs.inputMailElem.validity.valid) {
    createErrorMailNotif();
  } else {
    createMailSuccessNotif();
  }
});

refs.formElem.addEventListener('submit', async event => {
  event.preventDefault();
  if (refs.formElem.elements.email.value === '') {
    createEmptyFieldNotif();
  } else if (refs.inputMailElem.validity.valid) {
    const email = refs.formElem.elements.email.value;
    const comment = refs.formElem.elements.comments.value;
    const userData = { email, comment };
    console.log(userData);
    clearNotifField();
    try {
      const response = await createRequest(userData);
      console.log(response.data);
      const markup = modalTemplate(response);
      refs.contentBoxModalElem.insertAdjacentHTML('afterbegin', markup);
      refs.backDropElem.classList.remove('is-hidden');
    } catch (err) {
      console.log(err);
    }
  } else {
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
