// Timer Elements on DOM
const dayElement = document.querySelector('#timerDay');
const hourElement = document.querySelector('#timerHour');
const minuteElement = document.querySelector('#timerMinute');
const secondElement = document.querySelector('#timerSecond');

// Initializing variables
const lunchDate = new Date('Dec 25, 2023 00:00:00').getTime();

let currentTime;
let launchWaitTime;
let days, hours, minutes, seconds;

// Runs Timer
const startTimer = () => {
  currentTime = new Date().getTime();
  launchWaitTime = lunchDate - currentTime;

  calculateTime();

  displayTime();

  if (launchWaitTime <= 0) {
    stopTimer();
  }
};

// Get values for hours, minutes and seconds
const calculateTime = () => {
  days = Math.trunc(launchWaitTime / (1000 * 60 * 60 * 24));
  hours = Math.trunc(
    (launchWaitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes = Math.trunc((launchWaitTime % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.trunc((launchWaitTime % (1000 * 60)) / 1000);
};

// Shows values on DOM
const displayTime = () => {
  dayElement.textContent = days < 10 ? `0${days}` : days;
  hourElement.textContent = hours < 10 ? `0${hours}` : hours;
  minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
};

// Stops Timer
const stopTimer = () => {
  clearInterval(countDown);
  dayElement.textContent = '00';
  hourElement.textContent = '00';
  minuteElement.textContent = '00';
  secondElement.textContent = '00';
};

// Timer launched
const countDown = setInterval(() => startTimer(), 1000);

// Accordion
document.querySelectorAll('.accordion__title').forEach((button) => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }

    // Close other open accordion items
    document.querySelectorAll('.accordion__title').forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove('active');
        otherButton.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
});

// Header
// Elements
const nav = document.querySelector('.nav');
const navLinks = Array.from(document.querySelectorAll('.nav__item'));
const navList = document.querySelector('.nav__list');
const navHamburger = document.querySelector('.nav__hamburger');
const openHamburger = document.querySelector('#hamburgerOpen');
const closeHamburger = document.querySelector('#hamburgerClose');

// Control Nav closing
navList.addEventListener('click', (e) => {
  const cursorTarget = e.target.closest('.nav__item');
  if (!navLinks.includes(cursorTarget)) return;
  closeHamburger.checked = true;
});

// Scroll Blur
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 300) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
