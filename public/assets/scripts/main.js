// main.js

// toggle básico por si usas menú móvil
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// efecto de aparición al hacer scroll
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

revealEls.forEach(el => observer.observe(el));

console.log("AliviaTech scripts ✅");