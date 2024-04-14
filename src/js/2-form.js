
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.email-input');
const messageInput = document.querySelector('.message-input');
const key = 'feedback-form-state';

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

function onInputForm(event) {
  const updatedObj = JSON.parse(localStorage.getItem(key)) || {};
  const { name, value } = event.target;
  updatedObj[name] = value.trim();
  localStorage.setItem(key, JSON.stringify(updatedObj));
}

function onSubmitForm(event) {
  event.preventDefault();
  const savedObj = JSON.parse(localStorage.getItem(key));
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (email && message) {
    console.log(savedObj);
    form.reset();
    localStorage.removeItem(key);
  } else {
    alert('Please fill in both input fields.');
  }
}
