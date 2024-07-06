const form = document.querySelector('#form');
const div = document.getElementById('div');
const arr = Array.from(form);

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  form.reset();
  alert('Congrats! You did nothing...');
}
