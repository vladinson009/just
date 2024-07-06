const form = document.querySelector('#form');
const div = document.getElementById('div');
const arr = Array.from(form);

for (let i = 0; i < arr.length - 2; i++) {
  div.appendChild(arr[i]);
}
