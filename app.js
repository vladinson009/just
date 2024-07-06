const form = document.querySelector('#form');
const div = document.getElementById('div');
const arr = Array.from(form);

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let text = '';
    for (let each of current) {
      text += each + ' ';
    }
    const article = document.createElement('article');
    article.textContent = text.trim();
    div.appendChild(article);
  }
}
