// Get the form element for user sign-up
let signUp = document.getElementById('signup-form');

// Get input fields for user registration
let userName = document.getElementById('registration-name'),
  userEmail = document.getElementById('registration-email'),
  userPass = document.getElementById('registration-pass');

// Get elements to display validation error messages
let errName = document.getElementById('name-error'),
  errEmail = document.getElementById('email-error'),
  errPass = document.getElementById('password-error');

// Get the submit button for registration
let submitBtn = document.getElementById('submit');

// Get element fot display message
let formMsg = document.getElementById('form-msg')

// Object to store user data after successful validation
let userData = {};

/**
 * Validates the name input field.
 * Ensures the name contains only letters (based on NAME_REGEX).
 * Displays an error message if invalid and disables the submit button.
 * Removes the error message and enables the submit button if valid.
 */
const validateName = (e) => {
  let el = e.target
  if (!el.value.match(NAME_REGEX)) {
    console.log('Type a valid name')
    errName.textContent = 'Type a valid name'
    submitBtn.setAttribute('disabled', true)
  } else {
    errName.textContent = ''
    submitBtn.removeAttribute('disabled')
  }
}

userName.addEventListener('input', validateName)
userEmail.addEventListener('input', validateEmail)
userPass.addEventListener('input', validatePassword)


// Trigger registration logic
signUp.addEventListener('submit', (e) => {
  e.preventDefault();

  // Check if inputs are empty and display messages
  if (!userName.value) errName.textContent = 'This field is required';
  if (!userEmail.value) errEmail.textContent = 'This field is required';
  if (!userPass.value) errPass.textContent = 'This field is required';

  // Check if inputs are empty and disable submit
  const isFormValid = Boolean(userName.value && userEmail.value && userPass.value);
  submitBtn.disabled = !isFormValid;
  if (!isFormValid) return;

  // Prevent duplicate registrations & display message
  const storedUser = JSON.parse(localStorage.getItem('userData'))
  if (storedUser?.email === userEmail.value) return formMsg.textContent = 'Account already exists'

  // Store user data
  userData = {
    name: userName.value,
    email: userEmail.value,
    password: userPass.value
  };
  // Store user data in localstorage for future registration
  localStorage.setItem('userData', JSON.stringify(userData))
  // Display successful message
  formMsg.textContent = 'Successful registration'
  formMsg.style.color = '#22bb33'

  //Reset form and go to profile page after 0.5 second
  setInterval(() => {
    signUp.reset()
    location.href = '/profile.html'
  }, 800)

})