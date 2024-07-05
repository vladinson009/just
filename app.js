let form = document.querySelector('#form');
form.addEventListener('submit', onClick);
function onClick(e) {
  e.preventDefault();
  const [name, password, btn] = Array.from(form);
  console.log(`username ${name} with password ${password}`);
}
