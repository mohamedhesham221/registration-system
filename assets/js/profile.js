// Get elements displaying user info and sign-out button

let userName = document.getElementById('name'),
  userEmail = document.getElementById('email'),
  signOutBtn = document.getElementById('sign-out');

// Retrieve user data from localStorage and parse it into an object
const data = JSON.parse(localStorage.getItem('userData'));

// Display the user's name and email on the page
userName.textContent = data.name;
userEmail.textContent = data.email;

// Function to clear user session and redirect to the registration page
const clearSession = () => {
  localStorage.removeItem('userData')   // Remove user data from localStorage
  setInterval(() => {
    location.href = '/index.html'
  }, 200)
}
// Attach an event listener to the sign-out button to trigger session clearing
signOutBtn.addEventListener('click', clearSession)
