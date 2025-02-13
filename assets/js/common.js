// Regular expression for validating name (only letters allowed)
const NAME_REGEX = /^[A-Za-z\s]+$/;
// Regular expression for validating email format
const MAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Get eye icon
let eye = document.getElementById('eye')
let toggleType = false;

/**
 * Validates the email input field.
 * Ensures the email follows the correct format (based on MAIL_REGEX).
 * Displays an error message if invalid and disables the submit button.
 * Removes the error message and enables the submit button if valid.
 */
const validateEmail = (e) => {
  let el = e.target
  if (!el.value.match(MAIL_REGEX)) {
    console.log('Type a valid email')
    errEmail.textContent = 'Type a valid email'
    submitBtn.setAttribute('disabled', true)
  } else {
    errEmail.textContent = ''
    submitBtn.removeAttribute('disabled')
  }
}
/**
 * Validates the password input field.
 * Ensures the password is exactly 8 characters long.
 * Displays an error message if invalid and disables the submit button.
 * Removes the error message and enables the submit button if valid.
 */
const validatePassword = (e) => {
  let el = e.target
  if (el.value.length !== 8) {
    console.log('Password must be 8 characters')
    errPass.textContent = 'Password must be 8 characters'
    submitBtn.setAttribute('disabled', true)
  } else {
    errPass.textContent = ''
    submitBtn.removeAttribute('disabled')
  }
}

// show typed password
eye.addEventListener('click', function () {
  // Toggle bollean to show password and change eye icon src 
  toggleType = !toggleType 
  if (toggleType) {
    this.src = './assets/img/opened-eye.svg'
    userPass.type = 'text'
  } else {
    this.src = './assets/img/closed-eye.svg'
    userPass.type = 'password'
  }
})

