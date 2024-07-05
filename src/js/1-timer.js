// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    if (selectedDates[0].getTime() < date.getTime()) {
      iziToast.show({
        message: 'Please choose a date in the future',
        color: 'red',
        position: 'topCenter',
      });
      startBtn.disabled = true;
      startBtn.style.background = '#cfcfcf';
    } else {
      userSelectedDate = selectedDates[0];
      startBtn.disabled = false;
      startBtn.style.background = '#6c8cff';
    }
  },
};

const datetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
console.log('🚀 ~ startBtn:', startBtn);
startBtn.disabled = true;
flatpickr(datetimePicker, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startBtn.addEventListener('click', () => {
  datetimePicker.disabled = true;
  const interval = setInterval(() => {
    const time = convertMs(userSelectedDate - new Date());
    if (userSelectedDate <= new Date()) {
      clearInterval(interval);
      datetimePicker.disabled = false;
      return;
    }
    document.querySelector('[data-days]').textContent = addLeadingZero(
      time.days
    );
    document.querySelector('[data-hours]').textContent = addLeadingZero(
      time.hours
    );
    document.querySelector('[data-minutes]').textContent = addLeadingZero(
      time.minutes
    );
    document.querySelector('[data-seconds]').textContent = addLeadingZero(
      time.seconds
    );
  }, 1000);
  startBtn.disabled = true;
  startBtn.style.background = '#cfcfcf';
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// styles

const formInput = document.querySelector('input');

formInput.style.border = '1px solid #808080';
formInput.style.borderRadius = '4px';
formInput.style.width = '272px';
formInput.style.marginTop = '36px';
formInput.style.marginLeft = '156px';
formInput.style.paddingTop = '8px';
formInput.style.paddingBottom = '8px';
formInput.style.paddingLeft = '16px';
formInput.style.fontWeight = '400';
formInput.style.fontSize = '16px';
formInput.style.lineHeight = '150%';
formInput.style.letterSpacing = '0.04em';
formInput.style.color = '#2e2f42';
formInput.style.fontFamily = 'Montserrat, sans-serif';
formInput.onmouseover = function () {
  this.style.border = '1px solid #000';
};
formInput.onmouseout = function () {
  this.style.border = '1px solid #808080';
};
formInput.onfocus = function () {
  this.style.border = '1px solid #808080';
  this.style.outline = 'none';
};

const btn = document.querySelector('button');
btn.style.borderRadius = '8px';
btn.style.border = 'none';
btn.style.padding = '8px 16px';
btn.style.width = '75px';
btn.style.height = '40px';
btn.style.background = '#4e75ff';
btn.style.fontWeight = '500';
btn.style.fontSize = '16px';
btn.style.lineHeight = '150%';
btn.style.letterSpacing = '0.04em';
btn.style.color = '#fff';
btn.style.fontFamily = 'Montserrat, sans-serif';
btn.style.marginRight = 'auto';
btn.style.marginTop = '8px';
btn.style.cursor = 'pointer';
btn.style.background = '#cfcfcf';

btn.onmouseover = function () {
  if (btn.disabled === false) {
    this.style.background = '#6c8cff';
  }
};
btn.onmouseout = function () {
  if (btn.disabled === false) {
    this.style.background = '#4e75ff';
  }
};

const timer = document.querySelector('.timer');
timer.style.display = 'flex';
timer.style.justifyContent = 'center';
timer.style.width = '346px';
timer.style.heigth = '72px';
timer.style.gap = '24px';
timer.style.fontFamily = 'Montserrat, sans-serif';
timer.style.marginTop = '32px';
timer.style.marginLeft = '156px';

const fields = document.querySelectorAll('.field');
for (const i of fields) {
  i.style.display = 'flex';
  i.style.alignItems = 'center';
  i.style.flexDirection = 'column';
}

const numbers = document.querySelectorAll('.value');
for (const i of numbers) {
  i.style.fontFamily = 'inherit';
  i.style.fontWeight = '400';
  i.style.fontSize = '40px';
  i.style.lineHeight = '120%';
  i.style.letterSpacing = '0.04em';
  i.style.color = '#2e2f42';
  i.style.marginRight = 'auto';
  i.style.marginLeft = 'auto';
}

const label = document.querySelectorAll('.label');
for (const i of label) {
  i.style.fontFamily = 'inherit';
  i.style.fontWeight = '400';
  i.style.fontSize = '16px';
  i.style.lineHeight = '150%';
  i.style.color = '#2e2f42';
  i.style.marginRight = 'auto';
  i.style.marginLeft = 'auto';
}
