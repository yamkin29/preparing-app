import React from 'react';

export const CssFlexbox: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Что такое Flexbox?</h4>
            <p className="text-gray-600 leading-relaxed">
                Flexbox (Flexible Box Layout) — это модуль CSS, который позволяет создавать гибкие и адаптивные макеты.
                Он дает возможность элементам автоматически изменять свои размеры и положение для заполнения доступного пространства.
            </p>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Основные концепции</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-600">Контейнер и элементы</h5>
                    <div className="space-y-2">
                        <p className="text-gray-600 text-sm">
                            Flexbox работает с двумя типами элементов:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                            <li>Flex-контейнер (родительский элемент)</li>
                            <li>Flex-элементы (дочерние элементы)</li>
                        </ul>
                        <pre className="bg-gray-100 p-2 rounded text-sm mt-2">
{`<div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
</div>`}
                        </pre>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-green-600">Оси</h5>
                    <div className="space-y-2">
                        <p className="text-gray-600 text-sm">
                            Flexbox использует две оси для выравнивания:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                            <li>Главная ось (main axis)</li>
                            <li>Поперечная ось (cross axis)</li>
                        </ul>
                        <div className="mt-2 p-2 bg-gray-100 rounded">
                            <div className="flex items-center justify-center h-20 border-2 border-dashed border-gray-400">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600">Главная ось</div>
                                    <div className="text-xs text-gray-500">↓ Поперечная ось</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Свойства контейнера</h4>
            <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">display: flex</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Базовое свойство для создания flex-контейнера:
                    </p>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`.flex-container {
    display: flex;
}`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">flex-direction</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Определяет направление главной оси:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`flex-direction: row`}
                            </pre>
                            <div className="mt-2 flex bg-gray-200 p-2 rounded">
                                <div className="bg-blue-500 text-white p-2 m-1">1</div>
                                <div className="bg-blue-500 text-white p-2 m-1">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1">3</div>
                            </div>
                        </div>
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`flex-direction: row-reverse`}
                            </pre>
                            <div className="mt-2 flex flex-row-reverse bg-gray-200 p-2 rounded">
                                <div className="bg-blue-500 text-white p-2 m-1">1</div>
                                <div className="bg-blue-500 text-white p-2 m-1">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1">3</div>
                            </div>
                        </div>
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`flex-direction: column`}
                            </pre>
                            <div className="mt-2 flex flex-col bg-gray-200 p-2 rounded">
                                <div className="bg-blue-500 text-white p-2 m-1">1</div>
                                <div className="bg-blue-500 text-white p-2 m-1">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1">3</div>
                            </div>
                        </div>
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`flex-direction: column-reverse`}
                            </pre>
                            <div className="mt-2 flex flex-col-reverse bg-gray-200 p-2 rounded">
                                <div className="bg-blue-500 text-white p-2 m-1">1</div>
                                <div className="bg-blue-500 text-white p-2 m-1">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1">3</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">justify-content</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Выравнивание элементов по главной оси:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`justify-content: flex-start`}
                            </pre>
                            <div className="mt-2 flex justify-start bg-gray-200 p-2 rounded">
                                <div className="bg-blue-500 text-white p-2 m-1">1</div>
                                <div className="bg-blue-500 text-white p-2 m-1">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1">3</div>
                            </div>
                        </div>
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`justify-content: center`}
                            </pre>
                            <div className="mt-2 flex justify-center bg-gray-200 p-2 rounded">
                                <div className="bg-blue-500 text-white p-2 m-1">1</div>
                                <div className="bg-blue-500 text-white p-2 m-1">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1">3</div>
                            </div>
                        </div>
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`justify-content: space-between`}
                            </pre>
                            <div className="mt-2 flex justify-between bg-gray-200 p-2 rounded">
                                <div className="bg-blue-500 text-white p-2 m-1">1</div>
                                <div className="bg-blue-500 text-white p-2 m-1">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1">3</div>
                            </div>
                        </div>
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`justify-content: space-around`}
                            </pre>
                            <div className="mt-2 flex justify-around bg-gray-200 p-2 rounded">
                                <div className="bg-blue-500 text-white p-2 m-1">1</div>
                                <div className="bg-blue-500 text-white p-2 m-1">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1">3</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">align-items</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Выравнивание элементов по поперечной оси:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`align-items: stretch`}
                            </pre>
                            <div className="mt-2 flex items-stretch bg-gray-200 p-2 rounded h-20">
                                <div className="bg-blue-500 text-white p-2 m-1">1</div>
                                <div className="bg-blue-500 text-white p-2 m-1">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1">3</div>
                            </div>
                        </div>
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`align-items: center`}
                            </pre>
                            <div className="mt-2 flex items-center bg-gray-200 p-2 rounded h-20">
                                <div className="bg-blue-500 text-white p-2 m-1">1</div>
                                <div className="bg-blue-500 text-white p-2 m-1">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1">3</div>
                            </div>
                        </div>
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`align-items: flex-start`}
                            </pre>
                            <div className="mt-2 flex items-start bg-gray-200 p-2 rounded h-20">
                                <div className="bg-blue-500 text-white p-2 m-1">1</div>
                                <div className="bg-blue-500 text-white p-2 m-1">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1">3</div>
                            </div>
                        </div>
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`align-items: flex-end`}
                            </pre>
                            <div className="mt-2 flex items-end bg-gray-200 p-2 rounded h-20">
                                <div className="bg-blue-500 text-white p-2 m-1">1</div>
                                <div className="bg-blue-500 text-white p-2 m-1">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1">3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Свойства элементов</h4>
            <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">flex-grow</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Определяет, насколько элемент может увеличиваться относительно других:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`.item-1 { flex-grow: 1; }
.item-2 { flex-grow: 2; }
.item-3 { flex-grow: 1; }`}
                            </pre>
                            <div className="mt-2 flex bg-gray-200 p-2 rounded">
                                <div className="bg-blue-500 text-white p-2 m-1 flex-grow">1</div>
                                <div className="bg-green-500 text-white p-2 m-1 flex-grow-[2]">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1 flex-grow">3</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">flex-shrink</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Определяет, насколько элемент может уменьшаться относительно других:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`.item-1 { flex-shrink: 1; }
.item-2 { flex-shrink: 0; }
.item-3 { flex-shrink: 1; }`}
                            </pre>
                            <div className="mt-2 flex bg-gray-200 p-2 rounded">
                                <div className="bg-blue-500 text-white p-2 m-1 w-20">1</div>
                                <div className="bg-green-500 text-white p-2 m-1 w-20 flex-shrink-0">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1 w-20">3</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">flex-basis</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Определяет начальный размер элемента:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`.item-1 { flex-basis: 100px; }
.item-2 { flex-basis: 200px; }
.item-3 { flex-basis: 100px; }`}
                            </pre>
                            <div className="mt-2 flex bg-gray-200 p-2 rounded">
                                <div className="bg-blue-500 text-white p-2 m-1 basis-[100px]">1</div>
                                <div className="bg-green-500 text-white p-2 m-1 basis-[200px]">2</div>
                                <div className="bg-blue-500 text-white p-2 m-1 basis-[100px]">3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">5. Практические примеры</h4>
            <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 1: Навигационное меню</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`<nav class="nav">
    <div class="logo">Logo</div>
    <ul class="menu">
        <li><a href="#">Главная</a></li>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Контакты</a></li>
    </ul>
</nav>

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.menu {
    display: flex;
    gap: 1rem;
    list-style: none;
}`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 2: Карточки товаров</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`<div class="products">
    <div class="product-card">
        <img src="product1.jpg" alt="Product 1">
        <h3>Товар 1</h3>
        <p>Описание товара</p>
        <button>Купить</button>
    </div>
    <!-- Повторить для других товаров -->
</div>

.products {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.product-card {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
}`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 3: Центрирование контента</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`<div class="centered-content">
    <div class="content">
        <h1>Заголовок</h1>
        <p>Текст</p>
    </div>
</div>

.centered-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}`}
                    </pre>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">6. Лучшие практики</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Рекомендации</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Используйте flex-wrap для адаптивных макетов</li>
                        <li>Применяйте gap вместо margin для отступов между элементами</li>
                        <li>Используйте flex: 1 для равномерного распределения пространства</li>
                        <li>Комбинируйте flex-direction с justify-content и align-items</li>
                        <li>Используйте flex-shrink: 0 для элементов, которые не должны сжиматься</li>
                    </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Распространенные ошибки</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Забывают установить display: flex</li>
                        <li>Неправильно используют flex-grow и flex-shrink</li>
                        <li>Игнорируют flex-wrap при работе с адаптивным дизайном</li>
                        <li>Используют margin вместо gap</li>
                        <li>Не учитывают порядок элементов при использовании order</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">7. Поддержка браузерами</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-4">
                    Flexbox поддерживается всеми современными браузерами. Для старых версий может потребоваться
                    использование префиксов или fallback-решений.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                        <div className="font-medium">Chrome</div>
                        <div className="text-green-600">✓ Поддерживает</div>
                    </div>
                    <div className="text-center">
                        <div className="font-medium">Firefox</div>
                        <div className="text-green-600">✓ Поддерживает</div>
                    </div>
                    <div className="text-center">
                        <div className="font-medium">Safari</div>
                        <div className="text-green-600">✓ Поддерживает</div>
                    </div>
                    <div className="text-center">
                        <div className="font-medium">Edge</div>
                        <div className="text-green-600">✓ Поддерживает</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
); 