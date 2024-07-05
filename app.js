function onClick(e) {
  e.preventDefault();
  console.log('it works');
}
document.querySelector('#form').addEventListener('submit', onClick);
