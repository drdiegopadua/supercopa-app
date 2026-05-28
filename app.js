const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-btn');

function openTab(pageId, button = null){

  pages.forEach(page => {
    page.classList.remove('active-page');
  });

  document.getElementById(pageId).classList.add('active-page');

  navButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  if(button){
    button.classList.add('active');
  }

}

const targetDate = new Date('2026-12-20T08:00:00');

function updateCountdown(){

  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById('countdown').innerHTML = `${days} DIAS`;

}

updateCountdown();

setInterval(updateCountdown, 1000);
