// Глобальный массив товаров
const products = [
    {
        id: 1,
        title: 'Цитрамон',
        category: 'Антибиотики',
        price: 500,
        description: 'Описание лекарства 1 с подробностями и характеристиками.',
        image: 'https://avatars.mds.yandex.net/i?id=ee1bbd9c1d32a21d86674e31901033825d04e978-6311157-images-thumbs&n=13',
        rating: 4
    },
    {
        id: 2,
        title: 'Амокцициллин',
        category: 'Витамины',
        price: 700,
        description: 'Описание лекарства 2 с информацией о составе и применении.',
        image: 'https://cdn.eapteka.ru/upload/offer_photo/231/270/1.jpg?t=1481808906&_cvc=1738248804',
        rating: 3
    },
    {
        id: 3,
        title: 'Парацетамол',
        category: 'Болеутоляющие',
        price: 120,
        description: 'Эффективное средство для снижения температуры и болей.',
        image: 'https://cdn.rigla.ru/media/catalog/product/cache/afad95d7734d2fa6d0a8ba78597182b7/7/9/79688-5-6-f-5-56f5305f6ecc5d81f197f7cc26dce5368f03a0c0_79688.jpg',
        rating: 4
    },
    {
        id: 4,
        title: 'Аспирин',
        category: 'Анальгетики',
        price: 150,
        description: 'Обезболивающее и жаропонижающее средство для легких симптомов.',
        image: 'https://avatars.mds.yandex.net/i?id=fe3758e6100db1a81434cce2197f6ebb_l-9181483-images-thumbs&n=13',
        rating: 4
    },
    {
        id: 5,
        title: 'Анальгин',
        category: 'Обезболивающие',
        price: 100,
        description: 'Быстрое снятие боли, рекомендуется для кратковременного применения.',
        image: 'https://cdn.eapteka.ru/upload/offer_photo/351/36/1_a99f19561de401621c204bf35133cf46.png?t=1634118883&_cvc=1732177687',
        rating: 3
    },
    {
        id: 6,
        title: 'Но-шпа',
        category: 'Спазмолитики',
        price: 230,
        description: 'Снимает спазмы гладкой мускулатуры и облегчает боль в животе.',
        image: 'https://sun9-29.userapi.com/s/v1/ig2/rrSOZLI2b2cGUTDtl0AtAjV436S3WHp5Mo82JYpvmKU5eXKe5wKpAyCDyX1uuHXEwUap1KlDxFMNvc9O3gwQjGT0.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1400x1400&from=bu&u=Jb61Lu93fYkf-gm_i-c9k-AYNnG12fVtLpAu09svnQA&cs=807x807',
        rating: 4
    },
    {
        id: 7,
        title: 'Ибупрофен',
        category: 'Противовоспалительные',
        price: 180,
        description: 'Обезболивающее и противовоспалительное средство для снятия жара.',
        image: 'https://aptekamos.ru/images/medy/med003338',
        rating: 4
    },
    {
        id: 8,
        title: 'Левомеколь',
        category: 'Мази',
        price: 250,
        description: 'Мазь для лечения ран, ожогов и кожных повреждений.',
        image: 'https://cdn.rigla.ru/media/catalog/product/4/9/49549-3-d-6-3-3d6373fdf10820af4e452039ed8f17d0979673a7_49549.jpg',
        rating: 5
    },
    {
        id: 9,
        title: 'АЦЦ',
        category: 'Откашляющие',
        price: 310,
        description: 'Средство для разжижения мокроты и облегчения откашливания.',
        image: 'https://avatars.mds.yandex.net/i?id=2476f8b5da6c7dc5ba6162f04323336bd628c51c-5234369-images-thumbs&n=13',
        rating: 5
    },
    {
        id: 10,
        title: 'Амоксиклав',
        category: 'Антибиотики',
        price: 420,
        description: 'Антибиотик широкого спектра действия для лечения инфекций.',
        image: 'https://avatars.mds.yandex.net/i?id=b1b268b2b0c90950e6414bbb73a4d8a9_l-5289357-images-thumbs&n=13',
        rating: 4
    },
    {
        id: 11,
        title: 'Ципрофлоксацин',
        category: 'Антибиотики',
        price: 390,
        description: 'Применяется при бактериальных инфекциях различного характера.',
        image: 'https://avatars.mds.yandex.net/i?id=e1f5ada552a87691edcbb744690ddb26404fd5ee-7998976-images-thumbs&n=13',
        rating: 3
    },
    {
        id: 12,
        title: 'Мезим',
        category: 'ЖКТ',
        price: 260,
        description: 'Ферментный препарат для улучшения пищеварения и усвоения пищи.',
        image: 'https://avatars.mds.yandex.net/get-mpic/4342845/img_id5458616077318316807.jpeg/14hq',
        rating: 5
    },
    {
        id: 13,
        title: 'Арбидол',
        category: 'Противовирусные',
        price: 470,
        description: 'Противовирусное средство, укрепляющее иммунитет в период простуд.',
        image: 'https://img.vkusvill.ru/pim/images/site_LargeWebP/15becc73-c63d-4c4a-9f35-7843ef251a20.webp?1686824787.0494',
        rating: 3
    },
    {
        id: 14,
        title: 'Стрепсилс',
        category: 'Полость рта',
        price: 250,
        description: 'Леденцы для облегчения боли в горле и устранения дискомфорта.',
        image: 'https://avatars.mds.yandex.net/i?id=6a8f4206748438a131d729e3578a5d33_l-5884402-images-thumbs&n=13',
        rating: 4
    },
    {
        id: 15,
        title: 'Панадол',
        category: 'Жаропонижающее',
        price: 320,
        description: 'Обезболивающее и жаропонижающее средство для взрослых и детей.',
        image: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/177/013/188/593/191/1/100024499112b0.jpg',
        rating: 4
    },
    {
        id: 16,
        title: 'Вазелин',
        category: 'Мази',
        price: 90,
        description: 'Успокаивает и защищает кожу, способствует заживлению ран.',
        image: 'https://m.media-amazon.com/images/I/61aPJu9Ru-L._AC_UL960_QL65_.jpg',
        rating: 3
    },
    {
        id: 17,
        title: 'Йод',
        category: 'Антисептики',
        price: 70,
        description: 'Эффективное средство для обработки ран и профилактики инфекций.',
        image: 'https://avatars.mds.yandex.net/i?id=d93c3212222b7cfd4381d2d633c1c0823a7a8e82-5876175-images-thumbs&n=13',
        rating: 5
    }
];

let currentProducts = [...products]; // Текущий список после фильтрации/сортировки
let productsPerPage = 4;
let currentPage = 1;

// Отображение товаров с пагинацией
function displayProducts(productsToDisplay) {
    const productCardsContainer = document.getElementById('product-cards');
    productCardsContainer.innerHTML = '';

    // Расчет товаров для текущей страницы
    const startIndex = 0;
    const endIndex = currentPage * productsPerPage;
    const paginatedProducts = productsToDisplay.slice(startIndex, endIndex);

    if (paginatedProducts.length === 0) {
        productCardsContainer.innerHTML = '<p>Ничего не найдено.</p>';
        return;
    }

    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.dataset.id = product.id;
        productCard.dataset.category = product.category;
        productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <span class="price">₽${product.price}</span>
      <button class="add-to-cart" onclick="addToCart(${product.id})">В корзину</button>
      <button class="add-to-favorite" onclick="addToFavorite(${product.id})">В избранное</button>
      <button class="view-details" onclick="viewProductDetails(${product.id})">Подробнее</button>
      <div class="rating">${getStars(product.rating)}</div>
    `;
        productCardsContainer.appendChild(productCard);
    });
}

// Функция получения звезд для рейтинга
function getStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '&#9733;' : '&#9734;';
    }
    return stars;
}

// Функция поиска товаров с автодополнением
function handleSearchInput() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const suggestionsContainer = document.getElementById('suggestions');

    // Фильтруем по заголовкам
    const suggestions = products
        .filter(product => product.title.toLowerCase().includes(query))
        .map(product => product.title);

    // Отображаем подсказки
    suggestionsContainer.innerHTML = suggestions
        .map(suggestion => `<div onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`)
        .join('');

    // Применяем поиск при пустой строке
    searchProducts();
}

function selectSuggestion(suggestion) {
    document.getElementById('search-input').value = suggestion;
    document.getElementById('suggestions').innerHTML = '';
    searchProducts();
}

function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    currentProducts = products.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    currentPage = 1;
    displayProducts(currentProducts);
}

// Фильтрация по цене
function filterByPrice() {
    const priceRange = parseInt(document.getElementById('price-range').value);
    document.getElementById('price-value').innerText = `₽${priceRange}`;
    currentProducts = products.filter(product => product.price <= priceRange);
    currentPage = 1;
    displayProducts(currentProducts);
}

// Фильтрация по категории
function filterByCategory(category) {
    currentProducts = products.filter(product => product.category === category);
    currentPage = 1;
    displayProducts(currentProducts);
}

// Фильтрация по рейтингу
function filterByRating() {
    const minRating = parseInt(document.getElementById('rating-filter').value);
    currentProducts = products.filter(product => product.rating >= minRating);
    currentPage = 1;
    displayProducts(currentProducts);
}

// Сортировка товаров
function sortProducts() {
    const sortValue = document.getElementById('sort-select').value;
    if (sortValue === 'price-asc') {
        currentProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
        currentProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'rating-desc') {
        currentProducts.sort((a, b) => b.rating - a.rating);
    }
    displayProducts(currentProducts);
}

// Пагинация: кнопка "Показать ещё"
document.getElementById('load-more').addEventListener('click', () => {
    currentPage++;
    displayProducts(currentProducts);
});

// Добавление товара в корзину с сохранением в localStorage
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(p => p.id === productId);
    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Товар добавлен в корзину!');
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((acc, product) => acc + product.quantity, 0);
    document.getElementById('cart-count').innerText = count;
}

function addToFavorite(productId) {
    alert(`Товар ${productId} добавлен в избранное (функция в разработке).`);
}

// Модальное окно для просмотра деталей товара
function viewProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById('product-title').innerText = product.title;
        document.getElementById('product-description').innerText = product.description;
        // Здесь можно загрузить отзывы, если есть
        document.getElementById('product-modal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Инициализация страницы
window.onload = function () {
    displayProducts(products);
    updateCartCount();
};

// Переключение тёмной темы
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});