document.getElementById('register-form').addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    const res = await fetch('register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    const msg = document.getElementById('register-message');

    if (data.success) {
        localStorage.setItem('user', JSON.stringify({ name, email }));
        window.location.href = 'index.html';
    } else {
        msg.textContent = data.error || 'Ошибка регистрации';
    }
});

document.getElementById('login-form').addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const res = await fetch('login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    const msg = document.getElementById('login-message');

    if (data.success) {
        localStorage.setItem('user', JSON.stringify({ name: data.name, email }));
        showProfile(data.name, email);
    } else {
        msg.textContent = data.error || 'Ошибка входа';
    }
});

document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('user');
    location.reload();
});

const btnRegister = document.getElementById('show-register');
const btnLogin = document.getElementById('show-login');

btnRegister.addEventListener('click', () => {
    btnRegister.classList.add('active');
    btnLogin.classList.remove('active');
    document.getElementById('register-form').style.display = 'flex';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
});

btnLogin.addEventListener('click', () => {
    btnLogin.classList.add('active');
    btnRegister.classList.remove('active');
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
    document.getElementById('profile').style.display = 'none';
});

function showProfile(name, email) {
    document.getElementById('profile-name').textContent = name;
    document.getElementById('profile-email').textContent = email;
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    btnRegister.style.display = 'none';
    btnLogin.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) showProfile(user.name, user.email);
});
