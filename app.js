let form = document.querySelector('#form');
form.addEventListener('submit', onClick);
function onLoad() {
  getData();
  const div = document.getElementById('div');
  getData().forEach((e) => {
    div.appendChild(e);
  });
}
onLoad();
async function onClick(e) {
  e.preventDefault();
  const [name, age, gender] = Array.from(form);
  const data = {
    name: name.value,
    age: age.value,
    gender: gender.value,
  };
  name.value = '';
  age.value = '';
  gender.value = '';
  return await postData(data);
}

async function postData(data) {
  try {
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
    if (response.ok != true) {
      throw new Error(response.statusText);
    }
    const result = await response.json();

    return result;
  } catch (error) {
    throw new Error(error);
  }
}

async function getData() {
  try {
    const url = 'https://parseapi.back4app.com/classes/people';
    const options = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'au5ZfMxfafCmKs574dAyu0QTnNM1uOEvT9bTr4US',
        'X-Parse-REST-API-Key': 'ZnXSOEo9LBw2GK4nEUwRRwkSb7zryrwlyEidB8VA',
      },
    };
    const response = await fetch(url, options);
    if (response.ok != true) {
      throw new Error(response.statusText);
    }
    const result = await response.json();

    return result;
  } catch (error) {
    throw new Error(error);
  }
}
