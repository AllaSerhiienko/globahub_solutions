'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

function submit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submit);

// window.addEventListener('DOMContentLoaded', function () {
//   const container = document.querySelector('.header__animation-container');
//   if (container) {
//     const backgroundImage = container.style.backgroundImage;
//     const newVersion = Date.now(); // Генеруємо нову версію зображення на основі часу

//     // Замінюємо параметр запиту в CSS background-image
//     container.style.backgroundImage = backgroundImage.replace(/\?version=\d+/, `?version=${newVersion}`);
//   }
// });

