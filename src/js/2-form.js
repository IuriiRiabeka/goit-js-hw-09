const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const key = 'feedback-form-state';
const obj = {
  email: '',
  message: '',
};

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

checkLocalStorageForKeys(key);

function checkLocalStorageForKeys(key) {
  const savedObj = JSON.parse(localStorage.getItem(key));
  if (savedObj) {
    input.value = savedObj.email || '';
    textarea.value = savedObj.message || '';
  }
}

function onInputForm(event) {
  obj.email = input.value.trim();
  obj.message = textarea.value.trim();
  localStorage.setItem(key, JSON.stringify(obj));
}



function onSubmitForm(event) {
  event.preventDefault();
  if (obj.email && obj.message) {
    console.log(obj);
    form.reset();
    localStorage.removeItem(key);
  } else {
    alert('Please fill in both input fields.');
    form.reset();
    localStorage.removeItem(key);
  }
}