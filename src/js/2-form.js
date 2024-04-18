
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.email-input');
const messegeInput = document.querySelector('.messege-input');
const key = 'feedback-form-state';
const updatedObj = JSON.parse(localStorage.getItem(key)) || {};


form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

function onInputForm(event) {

  const { name, value } = event.target;
  updatedObj[name] = value.trim();
  localStorage.setItem(key, JSON.stringify(updatedObj));
}

function onSubmitForm(event) {
  event.preventDefault();
  const savedObj = JSON.parse(localStorage.getItem(key));
  const email = form.elements.email.value.trim();
  const messege = form.elements.messege.value.trim();

  if (email && messege) {
    console.log({ email, messege });
    form.reset();
    localStorage.removeItem(key);
  } else {
    alert('Please fill in both input fields.');
  }
}





if (updatedObj) {
  // Check if the input fields are found before accessing their values
  emailInput.value = updatedObj.email || "";
  messegeInput.value = updatedObj.messege || "";

} else {
  console.log('One or both input fields not found.');
}