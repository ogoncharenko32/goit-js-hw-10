// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const delayInput = document.querySelector('form input');
let delay;
delayInput.addEventListener('input', event => {
  delay = +event.currentTarget.value;
});

const radios = document.querySelectorAll('input[name="state"]');
let state;
radios.forEach(function (radio) {
  radio.addEventListener('change', function () {
    state = document.querySelector('input[name="state"]:checked').value;
  });
});

const form = document.querySelector('form');

const makePromise = ({ value, delayTime, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delayTime);
  });
};

const btn = document.querySelector('button');
btn.addEventListener('click', evt => {
  evt.preventDefault();
  if (state && delay) {
    if (state == 'fulfilled') {
      makePromise({
        value: `✅ Fulfilled promise in ${delay}ms`,
        delayTime: delay,
      })
        .then(value =>
          iziToast.show({
            message: value,
            color: 'green',
            position: 'topRight',
            timeout: 2500,
          })
        )
        .catch(error =>
          iziToast.show({
            message: error,
            color: 'red',
            position: 'topRight',
            timeout: 2500,
          })
        );
    } else {
      makePromise({
        value: `❌ Rejected promise in ${delay}ms`,
        delayTime: delay,
        shouldResolve: false,
      })
        .then(value =>
          iziToast.show({
            message: value,
            color: 'green',
            position: 'topRight',
            timeout: 2500,
          })
        )
        .catch(error =>
          iziToast.show({
            message: error,
            color: 'red',
            position: 'topRight',
            timeout: 2500,
          })
        );
    }
  } else {
    iziToast.show({
      title: `Caution`,
      message: `You forgot important data`,
      position: 'topRight',
      timeout: 2500,
    });
  }
  form.reset();
  state = '';
  delay = undefined;
});
