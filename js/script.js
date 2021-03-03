const modal = document.querySelector('.contact-modal');
const modalOpen = document.querySelector('.modal-button');
const ex = document.querySelector('.ex-button');
const body = document.querySelector("body");

modalOpen.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
});
ex.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'none';
  body.style.overflow = 'visible';
});
