// Get the password input field and eye icon
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');

// Add click event listener to the eye icon
togglePassword.addEventListener('click', function () {
  // Toggle the type between 'password' and 'text' to show/hide password
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;

  // Toggle the eye icon (open/close)
  this.querySelector('i').classList.toggle('fa-eye');
  this.querySelector('i').classList.toggle('fa-eye-slash');
});
