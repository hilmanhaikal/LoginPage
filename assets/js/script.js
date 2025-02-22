// Get elements
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

// Set initial icon state
togglePassword.classList.add(passwordInput.getAttribute('type') === 'password' ? 'fa-eye' : 'fa-eye-slash');

// Add event listener to toggle password visibility
togglePassword.addEventListener('click', function () {
    // Toggle the type attribute
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle the eye icon
    this.classList.toggle('fa-eye-slash'); 
    this.classList.toggle('fa-eye');
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement your login logic here
    console.log('Form submitted');
});
