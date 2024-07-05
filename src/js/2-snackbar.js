// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const delayInput = document.querySelector('form input');
let delay;
delayInput.addEventListener('input', event => {
  delay = event.currentTarget.value;
  console.log('🚀 ~ delay:', delay);
});

const radios = document.querySelectorAll('input[name="state"]');
let state;
radios.forEach(function (radio) {
  radio.addEventListener('change', function () {
    state = document.querySelector('input[name="state"]:checked').value;
    console.log(state);
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
  console.log(state);
  console.log(delay);
  evt.preventDefault();
  console.log(state === 'fulfilled');
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
  } else if (
    state === 0 ||
    delay === 0 ||
    state == undefined ||
    delay == undefined
  ) {
    iziToast.show({
      title: `Caution`,
      message: `You forgot important data`,
      position: 'topRight',
      timeout: 2500,
    });
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
  form.reset();
  state = 0;
  delay = 0;
});
