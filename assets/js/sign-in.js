// Get the form element for user sign-in
let signIn = document.getElementById('signin-form');

// Get input fields for user login
let userEmail = document.getElementById('signin-email'),
  userPass = document.getElementById('signin-pass');

// Get elements to display validation error messages
let errEmail = document.getElementById('email-error'),
  errPass = document.getElementById('password-error');

// Get the submit button for registration
let submitBtn = document.getElementById('submit');

// Get element fot display message
let formMsg = document.getElementById('form-msg')

// Validate Email & password inputs on typing
userEmail.addEventListener('input', validateEmail)
userPass.addEventListener('input', validatePassword)

// Get userDate from localstorage
const data = JSON.parse(localStorage.getItem('userData'))

signIn.addEventListener('submit', (e) => {
  e.preventDefault()
  // Check if inputs are empty and display messages
  if (!userEmail.value) errEmail.textContent = 'This field is required';
  if (!userPass.value) errPass.textContent = 'This field is required';

  // Check if inputs are empty and disable submit
  const isFormValid = Boolean(userEmail.value && userPass.value);
  submitBtn.disabled = !isFormValid;
  if (!isFormValid) return;

  // Validate user credentials against localStorage
  if (data?.email !== userEmail.value) return formMsg.textContent = 'Account doesn’t exist'
  if (data?.password !== userPass.value) return formMsg.textContent = 'Incorrect Password'


  // Display successful message
  formMsg.textContent = 'Successful Login'
  formMsg.style.color = '#22bb33'

  setInterval(() => {
    signIn.reset()
    location.href = '/profile.html'
  }, 500)

})