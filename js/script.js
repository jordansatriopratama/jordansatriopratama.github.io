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
  img.dataset.aosDuration = 1000;
  img.dataset.aosOffset = 400;
});

// src = 'https://unpkg.com/aos@next/dist/aos.js';
// AOS.init();
