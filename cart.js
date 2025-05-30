// Получение корзины из localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Сохранение корзины в localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Добавление товара в корзину
function addToCart(product) {
    const cart = getCart();
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    saveCart(cart);
    showToast('Товар добавлен в корзину');
}

// Удаление товара из корзины
function removeFromCart(productId) {
    const cart = getCart().filter(item => item.id !== productId);
    saveCart(cart);
    showToast('Товар удален из корзины');
}

// Изменение количества товара
function updateQuantity(productId, newQuantity) {
    const cart = getCart();
    const product = cart.find(item => item.id === productId);

    if (product) {
        if (newQuantity < 1) {
            removeFromCart(productId);
        } else {
            product.quantity = newQuantity;
            saveCart(cart);
        }
    }
}

// Очистка корзины
function clearCart() {
    if (confirm('Вы действительно хотите очистить корзину?')) {
        saveCart([]);
        showToast('Корзина очищена');
    }
}

// Обновление счетчика товаров
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countElement = document.getElementById('cart-count');

    if (countElement) {
        countElement.textContent = totalItems;
        countElement.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

// Отображение корзины
function renderCart() {
    const cart = getCart();
    const cartItemsContainer = document.getElementById('cart-items');

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Ваша корзина пуста</p>
                <a href="catalog.html" class="btn-primary">Перейти к покупкам</a>
            </div>
        `;
        return;
    }

    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <div class="cart-item-details">
                <h3>${item.title}</h3>
                <div class="cart-item-price">₽${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i> Удалить
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    document.getElementById('total-price').textContent = `₽${totalPrice.toFixed(2)}`;
}

// Показать уведомление
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Оформление заказа
async function checkoutOrder() {
    const customerName = document.getElementById('customer-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const paymentMethod = document.getElementById('payment-method').value;
    const comments = document.getElementById('comments').value.trim();

    const cart = getCart();

    // Валидация данных
    if (!customerName || !email || !phone || !address || !paymentMethod) {
        showToast('Заполните все обязательные поля!');
        return;
    }

    if (cart.length === 0) {
        showToast('Корзина пуста!');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Введите корректный email!');
        return;
    }

    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const orderData = {
        customer_name: customerName,
        email: email,
        phone: phone,
        address: address,
        payment_method: paymentMethod,
        comments: comments,
        total_amount: totalAmount,
        items: cart.map(item => ({
            product_id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
            image: item.image
        }))
    };

    try {
        const response = await fetch('api/order.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
        });

        const result = await response.json();

        if (result.success) {
            showToast('Заказ успешно оформлен!');
            clearCart();
            window.location.href = `order-success.html?order_id=${result.order_id}`;
        } else {
            showToast(`Ошибка: ${result.message}`);
        }
    } catch (error) {
        console.error('Ошибка:', error);
        showToast('Произошла ошибка при оформлении заказа');
    }
}

// Инициализация страницы
function initCartPage() {
    renderCart();
    updateCartCount();

    // Обработчик оформления заказа
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkoutOrder);
    }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', initCartPage);