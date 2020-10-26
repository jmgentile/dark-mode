const checkbox = document.querySelector('#dark-mode');

checkbox.addEventListener('click', ()=> {
  document.body.classList.toggle('dark-mode');
});