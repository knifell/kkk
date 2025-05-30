document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');

    emailError.textContent = '';
    phoneError.textContent = '';

    let hasError = false;

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.textContent = 'Введите корректный Email';
        hasError = true;
    }

    if (!phone.match(/^(\+7|8)[0-9]{10}$/)) {
        phoneError.textContent = 'Введите номер телефона в формате +79001234567 или 89001234567';
        hasError = true;
    }

    if (!hasError) {
        const userData = {
            name,
            email,
            phone,
            address
        };
        localStorage.setItem('user', JSON.stringify(userData));
        window.location.href = 'profile.html'; // переход к профилю после регистрации
    }
});
