'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});


const phoneScreen = document.querySelector('.phone__screen');

function showPhoneScreen() {
  const screenTop = phoneScreen.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (screenTop + 80 < windowHeight) {
    phoneScreen.classList.add('phone__screen--show');
    window.removeEventListener('scroll', showPhoneScreen);
  }
}

window.addEventListener('load', showPhoneScreen);

window.addEventListener('scroll', showPhoneScreen);



