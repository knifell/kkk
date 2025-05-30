// Тёмная тема — сохранение и загрузка
const toggleTheme = document.getElementById('toggleTheme');
const body = document.body;

function loadTheme() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark');
        toggleTheme.checked = true;
    }
}

function saveTheme(enabled) {
    localStorage.setItem('darkMode', enabled ? 'enabled' : 'disabled');
}

toggleTheme.addEventListener('change', () => {
    if (toggleTheme.checked) {
        body.classList.add('dark');
        saveTheme(true);
    } else {
        body.classList.remove('dark');
        saveTheme(false);
    }
});

loadTheme();


// Добавление товара в корзину с уведомлением
const cartNotification = document.getElementById('cartNotification');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', e => {
        // Логика добавления товара в корзину
        // Для примера — просто показываем уведомление
        showCartNotification();
    });
});

function showCartNotification() {
    cartNotification.classList.add('show');
    setTimeout(() => {
        cartNotification.classList.remove('show');
    }, 2500);
}


// Обработка подписки
const subscribeForm = document.getElementById('subscribeForm');
const subscribeEmail = document.getElementById('subscribeEmail');
const subscribeMessage = document.getElementById('subscribeMessage');

subscribeForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = subscribeEmail.value.trim();
    if (validateEmail(email)) {
        subscribeMessage.textContent = 'Спасибо за подписку!';
        subscribeMessage.style.color = '#28a745';
        subscribeEmail.value = '';
        // Здесь можно добавить отправку на сервер
    } else {
        subscribeMessage.textContent = 'Пожалуйста, введите корректный email.';
        subscribeMessage.style.color = 'red';
    }
});

function validateEmail(email) {
    // Простой Regex для валидации email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
