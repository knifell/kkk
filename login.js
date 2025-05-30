// Логика входа
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const savedData = JSON.parse(localStorage.getItem("userProfile"));

    if (savedData && savedData.email === email) {
        window.location.href = 'profile.html';
    } else {
        alert('Неверные данные для входа');
    }
});
