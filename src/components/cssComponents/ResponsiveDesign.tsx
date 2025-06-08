import React from 'react';

export const ResponsiveDesign: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Основы адаптивного дизайна</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Что такое адаптивный дизайн?</h5>
                    <p className="text-gray-600 mb-4">
                        Адаптивный дизайн - это подход к веб-дизайну, который позволяет веб-страницам автоматически подстраиваться под различные размеры экранов устройств. Это стало стандартом современной веб-разработки.
                    </p>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* Основные принципы адаптивного дизайна */
1. Гибкие сетки
2. Медиа-запросы
3. Адаптивные изображения
4. Мобильный-first подход
5. Отзывчивая типографика
6. Мета-тег viewport`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Мета-тег viewport</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Настройка viewport</h5>
                    <p className="text-gray-600 mb-4">
                        Мета-тег viewport необходим для корректной работы адаптивного дизайна на мобильных устройствах. Он сообщает браузеру, как обрабатывать размеры страницы.
                    </p>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`<!-- Базовый мета-тег viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Дополнительные параметры -->
<meta name="viewport" content="
    width=device-width,      /* ширина viewport равна ширине устройства */
    initial-scale=1,         /* начальный масштаб */
    minimum-scale=1,         /* минимальный масштаб */
    maximum-scale=5,         /* максимальный масштаб */
    user-scalable=yes        /* разрешить масштабирование */
" />`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Медиа-запросы</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Базовые брейкпоинты</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* CSS */
/* Мобильные устройства */
@media (max-width: 640px) {
    .element {
        width: 100%;
    }
}

/* Планшеты */
@media (min-width: 641px) and (max-width: 1024px) {
    .element {
        width: 50%;
    }
}

/* Десктопы */
@media (min-width: 1025px) {
    .element {
        width: 33.33%;
    }
}

/* Ориентация устройства */
@media (orientation: landscape) {
    .element {
        /* стили для горизонтальной ориентации */
    }
}

/* Сочетание условий */
@media (min-width: 768px) and (orientation: landscape) {
    .element {
        /* стили для планшетов в горизонтальной ориентации */
    }
}

/* Tailwind */
<div className="w-full md:w-1/2 lg:w-1/3">`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Отзывчивая типографика</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Адаптивные размеры текста</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* CSS */
/* Использование clamp() для адаптивного размера */
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
}

/* Комбинирование rem и vw */
h2 {
    font-size: calc(1.5rem + 3vw);
}

/* Медиа-запросы для типографики */
@media (max-width: 768px) {
    body {
        font-size: 16px;
    }
    h1 {
        font-size: 24px;
    }
}

@media (min-width: 769px) {
    body {
        font-size: 18px;
    }
    h1 {
        font-size: 32px;
    }
}

/* Tailwind */
<p className="text-base md:text-lg lg:text-xl">
    Адаптивный текст
</p>`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">5. Относительные единицы измерения</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Единицы измерения для адаптивности</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* CSS */
.container {
    width: 100%;          /* процент от родителя */
    max-width: 1200px;    /* максимальная ширина */
    margin: 0 auto;       /* центрирование */
    padding: 2rem;        /* отступы */
}

.text {
    font-size: clamp(1rem, 2vw, 2rem);  /* адаптивный размер шрифта */
}

/* Единицы измерения */
.element {
    width: 50%;           /* процент от родителя */
    font-size: 1.5rem;    /* относительно корневого элемента */
    padding: 1em;         /* относительно размера шрифта элемента */
    height: 50vh;         /* процент от высоты viewport */
    width: 80vw;          /* процент от ширины viewport */
}

/* Tailwind */
<div className="w-full max-w-7xl mx-auto p-8">
    <p className="text-base md:text-lg lg:text-xl">Адаптивный текст</p>
</div>`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">6. Flexbox и Grid</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Адаптивные сетки</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* CSS */
/* Flexbox */
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.item {
    flex: 1 1 300px;  /* базовый размер 300px, растягивается и сжимается */
}

/* Grid */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

/* Адаптивная сетка с Grid */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
}

/* Tailwind */
<div className="flex flex-wrap gap-4">
    <div className="flex-1 min-w-[300px]">Элемент</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div>Элемент сетки</div>
</div>`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">7. Адаптивные изображения</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Работа с изображениями</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* CSS */
.responsive-img {
    max-width: 100%;
    height: auto;
}

/* Разные изображения для разных размеров экрана */
.picture {
    background-image: url('small.jpg');
}

@media (min-width: 768px) {
    .picture {
        background-image: url('medium.jpg');
    }
}

@media (min-width: 1024px) {
    .picture {
        background-image: url('large.jpg');
    }
}

/* HTML с picture и srcset */
<picture>
    <source media="(min-width: 1024px)" srcSet="large.jpg" />
    <source media="(min-width: 768px)" srcSet="medium.jpg" />
    <img className="w-full h-auto" src="small.jpg" alt="Responsive image" />
</picture>

/* Tailwind */
<img className="w-full h-auto" src="image.jpg" alt="Responsive image" />

<picture>
    <source media="(min-width: 1024px)" srcSet="large.jpg" />
    <source media="(min-width: 768px)" srcSet="medium.jpg" />
    <img className="w-full h-auto" src="small.jpg" alt="Responsive image" />
</picture>`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">8. Лучшие практики</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Рекомендации по адаптивному дизайну</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Используйте мобильный-first подход</li>
                        <li>Применяйте относительные единицы измерения (rem, em, %, vw/vh)</li>
                        <li>Используйте CSS Grid и Flexbox для создания адаптивных макетов</li>
                        <li>Оптимизируйте изображения для разных размеров экрана</li>
                        <li>Тестируйте на реальных устройствах</li>
                        <li>Используйте мета-тег viewport</li>
                        <li>Применяйте адаптивную типографику</li>
                        <li>Учитывайте ориентацию устройства</li>
                    </ul>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* Мобильный-first подход */
.element {
    /* Базовые стили для мобильных */
    width: 100%;
    padding: 1rem;
}

/* Планшеты и десктопы */
@media (min-width: 768px) {
    .element {
        width: 50%;
        padding: 2rem;
    }
}

/* Tailwind (мобильный-first) */
<div className="w-full p-4 md:w-1/2 md:p-8">`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    </div>
); 