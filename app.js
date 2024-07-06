const form = document.querySelector('#form');
const div = document.getElementById('div');
const arr = Array.from(form);

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  for (let i = 0; i < arr.length - 2; i++) {
    const article = document.createElement('article');
    article.textContent = arr[i];
    div.appendChild(article);
  }
}
