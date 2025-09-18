// База данных товаров
const productsDatabase = {
    wheels: [
        {
            id: 'W001',
            title: 'Диски штампованные R15 6J',
            article: 'DSK-R15-6J-001',
            price: '2500 ₽',
            category: 'wheels',
            subcategory: 'summer-stamped',
            description: 'Летние штампованные диски R15 6J, PCD 4x100, ET 45. Подходят для большинства легковых автомобилей.',
            icon: 'fas fa-circle'
        },
        {
            id: 'W002',
            title: 'Диски штампованные R16 6.5J',
            article: 'DSK-R16-65J-002',
            price: '3200 ₽',
            category: 'wheels',
            subcategory: 'summer-stamped',
            description: 'Летние штампованные диски R16 6.5J, PCD 5x114.3, ET 50. Качественная сталь, долговечность.',
            icon: 'fas fa-circle'
        },
        {
            id: 'W003',
            title: 'Диски штампованные R14 5.5J',
            article: 'DSK-R14-55J-003',
            price: '2000 ₽',
            category: 'wheels',
            subcategory: 'summer-stamped',
            description: 'Летние штампованные диски R14 5.5J, PCD 4x98, ET 35. Идеальны для малолитражек.',
            icon: 'fas fa-circle'
        }
    ],
    tires: [
        {
            id: 'T001',
            title: 'Шины летние 205/55 R16',
            article: 'SHN-LET-205-55-R16-001',
            price: '4500 ₽',
            category: 'tires',
            subcategory: 'summer',
            description: 'Летние шины 205/55 R16, отличное сцепление с дорогой, низкий уровень шума.',
            icon: 'fas fa-car'
        },
        {
            id: 'T002',
            title: 'Шины зимние 195/65 R15',
            article: 'SHN-ZIM-195-65-R15-002',
            price: '5200 ₽',
            category: 'tires',
            subcategory: 'winter',
            description: 'Зимние шины 195/65 R15, шипованные, отличная проходимость по снегу и льду.',
            icon: 'fas fa-snowflake'
        },
        {
            id: 'T003',
            title: 'Шины внедорожные 235/75 R15',
            article: 'SHN-OFF-235-75-R15-003',
            price: '7800 ₽',
            category: 'tires',
            subcategory: 'offroad',
            description: 'Внедорожные шины 235/75 R15, усиленная боковина, отличная проходимость.',
            icon: 'fas fa-mountain'
        },
        {
            id: 'T004',
            title: 'Комплект: диски + летние шины R16',
            article: 'KMP-DSK-LET-R16-004',
            price: '18000 ₽',
            category: 'tires',
            subcategory: 'sets',
            description: 'Готовый комплект: 4 диска R16 + 4 летние шины 205/55 R16. Готов к установке.',
            icon: 'fas fa-cog'
        },
        {
            id: 'T005',
            title: 'Комплект: диски + зимние шины R15',
            article: 'KMP-DSK-ZIM-R15-005',
            price: '22000 ₽',
            category: 'tires',
            subcategory: 'sets',
            description: 'Готовый комплект: 4 диска R15 + 4 зимние шины 195/65 R15. Шипованные.',
            icon: 'fas fa-cog'
        }
    ],
    military: [
        {
            id: 'M001',
            title: 'Куртка военная камуфляж',
            article: 'VOE-KUR-KAM-001',
            price: '3500 ₽',
            category: 'military',
            subcategory: 'clothing',
            description: 'Военная куртка камуфляжной расцветки, размеры 48-58, водоотталкивающая ткань.',
            icon: 'fas fa-tshirt'
        },
        {
            id: 'M002',
            title: 'Берцы армейские кожаные',
            article: 'VOE-BER-KOZ-002',
            price: '4200 ₽',
            category: 'military',
            subcategory: 'footwear',
            description: 'Армейские берцы из натуральной кожи, размеры 39-46, усиленная подошва.',
            icon: 'fas fa-shoe-prints'
        },
        {
            id: 'M003',
            title: 'Рюкзак тактический 45л',
            article: 'VOE-RUK-TAK-003',
            price: '2800 ₽',
            category: 'military',
            subcategory: 'accessories',
            description: 'Тактический рюкзак объемом 45 литров, множество карманов, прочная ткань.',
            icon: 'fas fa-backpack'
        },
        {
            id: 'M004',
            title: 'Ремень армейский с пряжкой',
            article: 'VOE-REM-ARM-004',
            price: '850 ₽',
            category: 'military',
            subcategory: 'accessories',
            description: 'Армейский ремень с металлической пряжкой, длина регулируется.',
            icon: 'fas fa-grip-lines'
        },
        {
            id: 'M005',
            title: 'Фляга армейская алюминиевая',
            article: 'VOE-FLY-ALU-005',
            price: '650 ₽',
            category: 'military',
            subcategory: 'accessories',
            description: 'Алюминиевая армейская фляга объемом 1 литр с чехлом.',
            icon: 'fas fa-flask'
        }
    ],
    tools: [
        {
            id: 'E001',
            title: 'Дрель ударная 850Вт',
            article: 'ELE-DRL-UDA-001',
            price: '5500 ₽',
            category: 'tools',
            subcategory: 'drilling',
            description: 'Ударная дрель мощностью 850Вт, патрон 13мм, регулировка оборотов.',
            icon: 'fas fa-tools'
        },
        {
            id: 'E002',
            title: 'Болгарка 125мм 900Вт',
            article: 'ELE-BOL-125-002',
            price: '3200 ₽',
            category: 'tools',
            subcategory: 'grinding',
            description: 'Угловая шлифмашина 125мм, мощность 900Вт, защитный кожух.',
            icon: 'fas fa-cog'
        },
        {
            id: 'E003',
            title: 'Шуруповерт аккумуляторный 18В',
            article: 'ELE-SHU-AKK-003',
            price: '4800 ₽',
            category: 'tools',
            subcategory: 'screwing',
            description: 'Аккумуляторный шуруповерт 18В, 2 аккумулятора, зарядное устройство.',
            icon: 'fas fa-screwdriver'
        },
        {
            id: 'E004',
            title: 'Перфоратор SDS-Plus 800Вт',
            article: 'ELE-PER-SDS-004',
            price: '7200 ₽',
            category: 'tools',
            subcategory: 'drilling',
            description: 'Перфоратор SDS-Plus, мощность 800Вт, 3 режима работы, кейс в комплекте.',
            icon: 'fas fa-hammer'
        },
        {
            id: 'E005',
            title: 'Лобзик электрический 650Вт',
            article: 'ELE-LOB-ELE-005',
            price: '2900 ₽',
            category: 'tools',
            subcategory: 'cutting',
            description: 'Электрический лобзик 650Вт, маятниковый ход, лазерная направляющая.',
            icon: 'fas fa-cut'
        }
    ]
};

// Глобальные переменные
let currentCategory = 'all';
let currentView = 'grid';
let filteredProducts = [];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    // Обработчики для модального окна
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close');
    
    // Закрытие модального окна по клику на крестик
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProductModal);
    }
    
    // Закрытие модального окна по клику вне его области
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeProductModal();
        }
    });
    
    // Закрытие модального окна по нажатию Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal && modal.style.display === 'block') {
            closeProductModal();
        }
    });
});

function initializeApp() {
    setupEventListeners();
    loadAllProducts();
    updateSectionTitle();
}

function setupEventListeners() {
    // Навигация по категориям
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Обновляем активную ссылку
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Получаем категорию и обновляем товары
            currentCategory = this.dataset.category;
            updateProducts();
            updateSectionTitle();
            updateFilters();
        });
    });
    
    // Поиск
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    
    // Переключение вида
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentView = this.dataset.view;
            updateProductsView();
        });
    });
    
    // Фильтры
    const filterCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });
}

function loadAllProducts() {
    filteredProducts = [];
    Object.values(productsDatabase).forEach(categoryProducts => {
        filteredProducts = filteredProducts.concat(categoryProducts);
    });
    renderProducts();
}

function updateProducts() {
    if (currentCategory === 'all') {
        loadAllProducts();
    } else {
        filteredProducts = productsDatabase[currentCategory] || [];
        applySubcategoryFilters();
        renderProducts();
    }
}

function updateSectionTitle() {
    const titleElement = document.getElementById('sectionTitle');
    const titles = {
        'all': 'Все товары',
        'wheels': 'Диски',
        'tires': 'Резина',
        'military': 'Военная форма',
        'tools': 'Электроинструмент'
    };
    titleElement.textContent = titles[currentCategory] || 'Товары';
}

function updateFilters() {
    // Скрываем все фильтры
    document.querySelectorAll('.filter-group').forEach(group => {
        group.style.display = 'none';
    });
    
    // Показываем нужные фильтры
    if (currentCategory === 'tires') {
        document.getElementById('tiresFilters').style.display = 'block';
    } else if (currentCategory === 'wheels') {
        document.getElementById('wheelsFilters').style.display = 'block';
    }
    
    // Сбрасываем все чекбоксы
    document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
}

function handleFilterChange() {
    applySubcategoryFilters();
    renderProducts();
}

function applySubcategoryFilters() {
    const checkedFilters = Array.from(document.querySelectorAll('.filter-group input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    if (checkedFilters.length === 0) {
        // Если фильтры не выбраны, показываем все товары категории
        filteredProducts = productsDatabase[currentCategory] || [];
    } else {
        // Фильтруем по подкатегориям
        const categoryProducts = productsDatabase[currentCategory] || [];
        filteredProducts = categoryProducts.filter(product => 
            checkedFilters.includes(product.subcategory)
        );
    }
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        updateProducts();
        return;
    }
    
    // Поиск по всем товарам или в текущей категории
    let searchBase = currentCategory === 'all' ? 
        Object.values(productsDatabase).flat() : 
        (productsDatabase[currentCategory] || []);
    
    filteredProducts = searchBase.filter(product => 
        product.title.toLowerCase().includes(searchTerm) ||
        product.article.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    renderProducts();
}

function updateProductsView() {
    const container = document.getElementById('productsContainer');
    if (currentView === 'list') {
        container.classList.add('list-view');
    } else {
        container.classList.remove('list-view');
    }
}

function renderProducts() {
    const container = document.getElementById('productsContainer');
    
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Товары не найдены</h3>
                <p>Попробуйте изменить параметры поиска или фильтры</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    updateProductsView();
}

function createProductCard(product) {
    const categoryNames = {
        'wheels': 'Диски',
        'tires': 'Резина',
        'military': 'Военная форма',
        'tools': 'Электроинструмент'
    };
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <i class="${product.icon}"></i>
            </div>
            <div class="product-info">
                <div class="product-details">
                    <span class="product-category">${categoryNames[product.category]}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-article">
                        Артикул: ${product.article}
                        <button class="btn-copy" onclick="copyArticle('${product.article}')" title="Копировать артикул">
                            <i class="fas fa-copy"></i>
                        </button>
                    </p>
                    <div class="product-price">${product.price}</div>
                    <p class="product-description">${product.description}</p>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="openProductModal(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                        <i class="fas fa-info-circle"></i> Подробнее
                    </button>
                </div>
            </div>
        </div>
    `;
}

function openAvito(avitoLink) {
    // Открываем ссылку на Авито
    window.open(avitoLink, '_blank');
}

function copyArticle(article) {
    navigator.clipboard.writeText(article).then(() => {
        // Показываем уведомление
        showNotification('Артикул скопирован в буфер обмена!');
    }).catch(() => {
        // Fallback для старых браузеров
        const textArea = document.createElement('textarea');
        textArea.value = article;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Артикул скопирован в буфер обмена!');
    });
}

// Функция для показа уведомления
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Функция для копирования артикула
function copyArticle(article) {
    navigator.clipboard.writeText(article).then(() => {
        showNotification(`Артикул ${article} скопирован!`);
    }).catch(() => {
        showNotification('Ошибка при копировании', 'error');
    });
}

// Функция для открытия модального окна с подробной информацией
function openProductModal(product) {
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalIcon = document.getElementById('modalIcon');
    const modalProductTitle = document.getElementById('modalProductTitle');
    const modalArticle = document.getElementById('modalArticle');
    const modalCategory = document.getElementById('modalCategory');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalAvitoBtn = document.getElementById('modalAvitoBtn');

    // Заполняем данные
    if (modalTitle) modalTitle.textContent = 'Детали товара';
    if (modalIcon) modalIcon.className = product.icon;
    if (modalProductTitle) modalProductTitle.textContent = product.title;
    if (modalArticle) modalArticle.textContent = product.article;
    if (modalCategory) modalCategory.textContent = getCategoryName(product.category);
    if (modalPrice) modalPrice.textContent = product.price;
    if (modalDescription) modalDescription.textContent = product.description;

    // Настраиваем кнопку Авито
    if (modalAvitoBtn) {
        modalAvitoBtn.onclick = () => window.open(product.avitoLink, '_blank');
    }

    // Показываем модальное окно
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Функция для закрытия модального окна
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Функция для получения названия категории
function getCategoryName(category) {
    const categoryNames = {
        'wheels': 'Диски',
        'tires': 'Шины',
        'military': 'Военные товары',
        'tools': 'Инструменты'
    };
    return categoryNames[category] || category;
}