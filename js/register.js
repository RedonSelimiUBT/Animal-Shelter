const registerForm = document.getElementById('register-form');
const registerMsg = document.getElementById('register-msg');

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if(password !== confirmPassword){
        registerMsg.textContent = "Passwords do not match!";
        registerMsg.style.color = "red";
        return;
    }

    if(password.length < 6){
        registerMsg.textContent = "Password must be at least 6 characters!";
        registerMsg.style.color = "red";
        return;
    }

    registerMsg.textContent = "Registration successful!";
    registerMsg.style.color = "green";
});