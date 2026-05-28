const themeToggle = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme');

if(savedTheme){
  document.documentElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {

  const current = document.documentElement.getAttribute('data-theme');

  const next = current === 'light'
    ? 'dark'
    : 'light';

  document.documentElement.setAttribute('data-theme', next);

  localStorage.setItem('theme', next);

});

const targetDate = new Date('2026-11-28T08:00:00');

function updateCountdown(){

  const now = new Date();

  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById('countdown').innerHTML = `
    Faltam ${days} dias
  `;

}

updateCountdown();

setInterval(updateCountdown, 1000);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
