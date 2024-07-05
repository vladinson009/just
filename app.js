let form = document.querySelector('#form');
form.addEventListener('submit', onClick);

async function onClick(e) {
  e.preventDefault();
  const [name, age, gender] = Array.from(form).value;
  const data = {
    name: name,
    age: age,
    gender: gender,
  };
  form.clear();
  return await postData(data);
}

async function postData(data) {
  const url = 'https://parseapi.back4app.com/classes/people';
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'au5ZfMxfafCmKs574dAyu0QTnNM1uOEvT9bTr4US',
      'X-Parse-REST-API-Key': 'ZnXSOEo9LBw2GK4nEUwRRwkSb7zryrwlyEidB8VA',
      body: JSON.stringify(data),
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();

  return result;
}
