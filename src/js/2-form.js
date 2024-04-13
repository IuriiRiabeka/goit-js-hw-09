const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const key = 'feedback-form-state';

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

// Update localStorage after input in the field
function onInputForm(event) {
  const updatedObj = JSON.parse(localStorage.getItem(key)) || {}; // Get the current object from localStorage or create a new object
  const { name, value } = event.target; // Get the name and value of the field that triggered the input event
  updatedObj[name] = value.trim(); // Update the object property according to the form field name, trimming excess whitespace
  localStorage.setItem(key, JSON.stringify(updatedObj)); // Update the localStorage with the updated object
}

// Form submission handling
function onSubmitForm(event) {
  event.preventDefault();
  const savedObj = JSON.parse(localStorage.getItem(key)); // Get the saved form state object from localStorage
  if (savedObj && savedObj.email && savedObj.message) {
    console.log(savedObj);
    form.reset();
    localStorage.removeItem(key);
  } else {
    alert('Please fill in both input fields.');
  }
}
