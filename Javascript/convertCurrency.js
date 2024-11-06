
const validUsername = "user";
const validPassword = "admin";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === validUsername && password === validPassword) {
        window.location.href = "dashboard.html";
    } else {
        loginMessage.textContent = "Login failed. Please check your username and password.";
        loginMessage.classList.remove("hidden");
    }
});

function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const conversionResult = document.getElementById("conversionResult");
    const result = amount * 1.2;
    conversionResult.textContent = `Converted Amount: ${result} ${toCurrency}`;
}
