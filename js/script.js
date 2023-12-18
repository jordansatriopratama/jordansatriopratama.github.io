const nav = document.getElementById('nav');

window.addEventListener('scroll', function () {
  scrollposition = window.scrollY;
  if (scrollposition >= 60) {
    nav.classList.add('nav-dark');
  } else if (scrollposition <= 60) {
    nav.classList.remove('nav-dark');
  }
});

const imageskill = document.querySelectorAll('.imgskill');
imageskill.forEach((img, i) => {
  img.dataset.aos = 'flip-left';
  img.dataset.aosDelay = i * 250;
  img.dataset.aosDuration = 500;
  // img.dataset.aosOffset = 200;
});

// const imageportfolio = document.querySelectorAll('.imgportfolio');
// imageportfolio.forEach((img, i) => {
//   img.dataset.aos = 'zoom-in';
//   // img.dataset.aosDelay = i * 250;
//   img.dataset.aosDuration = 500;
//   // img.dataset.aosOffset = 200;
// });
// src = 'https://unpkg.com/aos@next/dist/aos.js';
// AOS.init();
