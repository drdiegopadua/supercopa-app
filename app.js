const targetDate = new Date('2026-12-20T08:00:00');

function updateCountdown(){

  const now = new Date();

  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById('countdown').innerHTML = `
    ${days} DIAS ${hours}H
  `;

}

updateCountdown();

setInterval(updateCountdown, 1000);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
