// Select all buttons
const buttons = document.querySelectorAll('.btn');

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    // Add 'active' class to the clicked button
    button.classList.add('active');
  });
});


function togglePassword(inputId) {
    const inputField = document.getElementById(inputId);
    const isPassword = inputField.type === "password";
    inputField.type = isPassword ? "text" : "password";
  }
  