import React from 'react';

export const BemMethodology: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Что такое БЭМ?</h4>
            <p className="text-gray-600 leading-relaxed">
                БЭМ (Блок, Элемент, Модификатор) — это методология именования классов в CSS, которая помогает создавать
                переиспользуемые компоненты и разделять код на независимые блоки. БЭМ делает код более понятным и
                поддерживаемым.
            </p>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Основные концепции БЭМ</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-600">Блок</h5>
                    <p className="text-gray-600 text-sm">
                        Независимый компонент, который можно переиспользовать. Блоки могут быть вложены друг в друга.
                    </p>
                    <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
{`.header { }
.menu { }
.button { }`}
                    </pre>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-green-600">Элемент</h5>
                    <p className="text-gray-600 text-sm">
                        Часть блока, которая не может существовать отдельно от него. Обозначается через двойное подчеркивание.
                    </p>
                    <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
{`.header__logo { }
.menu__item { }
.button__icon { }`}
                    </pre>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-purple-600">Модификатор</h5>
                    <p className="text-gray-600 text-sm">
                        Определяет внешний вид, состояние или поведение блока/элемента. Обозначается через двойной дефис.
                    </p>
                    <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
{`.button--primary { }
.menu__item--active { }
.header--fixed { }`}
                    </pre>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Практические примеры</h4>
            <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 1: Карточка товара</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`<div class="card">
    <img class="card__image" src="product.jpg" alt="Product">
    <div class="card__content">
        <h3 class="card__title">Название товара</h3>
        <p class="card__description">Описание товара</p>
        <button class="card__button card__button--primary">Купить</button>
    </div>
</div>`}
                    </pre>
                    <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
{`.card { }
.card__image { }
.card__content { }
.card__title { }
.card__description { }
.card__button { }
.card__button--primary { }`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 2: Навигационное меню</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`<nav class="nav">
    <ul class="nav__list">
        <li class="nav__item">
            <a class="nav__link nav__link--active" href="#">Главная</a>
        </li>
        <li class="nav__item">
            <a class="nav__link" href="#">О нас</a>
        </li>
    </ul>
</nav>`}
                    </pre>
                    <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
{`.nav { }
.nav__list { }
.nav__item { }
.nav__link { }
.nav__link--active { }`}
                    </pre>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Преимущества использования БЭМ</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Модульность и переиспользуемость компонентов</li>
                <li>Отсутствие конфликтов имен классов</li>
                <li>Понятная и предсказуемая структура CSS</li>
                <li>Упрощение поддержки и масштабирования проекта</li>
                <li>Улучшение производительности за счет уменьшения специфичности селекторов</li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">5. Лучшие практики</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Правила именования</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Используйте только строчные буквы и дефисы для разделения слов в именах блоков</li>
                        <li>Не используйте вложенность более двух уровней</li>
                        <li>Избегайте использования тегов в селекторах</li>
                        <li>Не используйте ID для стилизации</li>
                    </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Организация файлов</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`styles/
  ├── blocks/
  │   ├── button/
  │   │   ├── button.css
  │   │   └── button.js
  │   └── card/
  │       ├── card.css
  │       └── card.js
  └── main.css`}
                    </pre>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">6. Распространенные ошибки</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Неправильно:</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`/* Слишком длинные имена */
.header__navigation__menu__item__link { }

/* Смешивание методологий */
.header .nav .menu-item { }

/* Использование тегов */
div.header { }

/* Излишняя вложенность */
.header__nav__menu__item { }`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Правильно:</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`/* Плоскость имен */
.header { }
.nav { }
.menu { }
.menu__item { }
.menu__link { }

/* Независимые блоки */
.button { }
.button--primary { }
.button--large { }`}
                    </pre>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">7. Инструменты для работы с БЭМ</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>BEM-tools - набор инструментов для работы с БЭМ</li>
                <li>BEM-validator - проверка соответствия кода методологии БЭМ</li>
                <li>BEM-names - генератор имен классов по БЭМ</li>
                <li>PostCSS BEM Linter - линтер для проверки БЭМ-именования</li>
            </ul>
        </section>
    </div>
); 