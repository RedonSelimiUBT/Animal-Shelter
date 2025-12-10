const loginForm = document.getElementById('login-form');
const loginMsg = document.getElementById('login-msg');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Demo account for now
    const demoUser = { email: "user@example.com", password: "123456" };

    if(email === demoUser.email && password === demoUser.password){
        loginMsg.textContent = "Login successful!";
        loginMsg.style.color = "green";
    } else {
        loginMsg.textContent = "Incorrect email or password!";
        loginMsg.style.color = "red";
    }
});