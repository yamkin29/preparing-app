import React from 'react';

export const CssGrid: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Что такое CSS Grid?</h4>
            <p className="text-gray-600 leading-relaxed">
                CSS Grid — это двумерная система компоновки, которая позволяет создавать сложные сетки для размещения элементов.
                В отличие от Flexbox, который в основном работает в одном измерении, Grid позволяет контролировать расположение
                элементов как по горизонтали, так и по вертикали одновременно.
            </p>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Основные концепции</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-600">Контейнер и элементы</h5>
                    <div className="space-y-2">
                        <p className="text-gray-600 text-sm">
                            Grid работает с двумя типами элементов:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                            <li>Grid-контейнер (родительский элемент)</li>
                            <li>Grid-элементы (дочерние элементы)</li>
                        </ul>
                        <pre className="bg-gray-100 p-2 rounded text-sm mt-2">
{`<div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
</div>`}
                        </pre>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-green-600">Структура сетки</h5>
                    <div className="space-y-2">
                        <p className="text-gray-600 text-sm">
                            Основные элементы сетки:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                            <li>Линии сетки (grid lines)</li>
                            <li>Дорожки (tracks)</li>
                            <li>Ячейки (cells)</li>
                            <li>Области (areas)</li>
                        </ul>
                        <div className="mt-2 p-2 bg-gray-100 rounded">
                            <div className="grid grid-cols-3 grid-rows-3 gap-2 h-40 border-2 border-dashed border-gray-400">
                                <div className="bg-blue-100 border border-blue-300 flex items-center justify-center">1</div>
                                <div className="bg-blue-100 border border-blue-300 flex items-center justify-center">2</div>
                                <div className="bg-blue-100 border border-blue-300 flex items-center justify-center">3</div>
                                <div className="bg-blue-100 border border-blue-300 flex items-center justify-center">4</div>
                                <div className="bg-blue-100 border border-blue-300 flex items-center justify-center">5</div>
                                <div className="bg-blue-100 border border-blue-300 flex items-center justify-center">6</div>
                                <div className="bg-blue-100 border border-blue-300 flex items-center justify-center">7</div>
                                <div className="bg-blue-100 border border-blue-300 flex items-center justify-center">8</div>
                                <div className="bg-blue-100 border border-blue-300 flex items-center justify-center">9</div>
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
                    <h5 className="font-medium mb-2">display: grid</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Базовое свойство для создания grid-контейнера:
                    </p>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`.grid-container {
    display: grid;
}`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">grid-template-columns и grid-template-rows</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Определяют размеры и количество колонок и строк:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`grid-template-columns: 100px 200px 100px;
grid-template-rows: 100px 100px;`}
                            </pre>
                            <div className="mt-2 grid grid-cols-3 gap-2">
                                <div className="bg-blue-500 text-white p-2 h-[100px] flex items-center justify-center">1</div>
                                <div className="bg-blue-500 text-white p-2 h-[100px] flex items-center justify-center">2</div>
                                <div className="bg-blue-500 text-white p-2 h-[100px] flex items-center justify-center">3</div>
                                <div className="bg-blue-500 text-white p-2 h-[100px] flex items-center justify-center">4</div>
                                <div className="bg-blue-500 text-white p-2 h-[100px] flex items-center justify-center">5</div>
                                <div className="bg-blue-500 text-white p-2 h-[100px] flex items-center justify-center">6</div>
                            </div>
                        </div>
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 100px);`}
                            </pre>
                            <div className="mt-2 grid grid-cols-3 gap-2">
                                <div className="bg-green-500 text-white p-2 h-[100px] flex items-center justify-center">1</div>
                                <div className="bg-green-500 text-white p-2 h-[100px] flex items-center justify-center">2</div>
                                <div className="bg-green-500 text-white p-2 h-[100px] flex items-center justify-center">3</div>
                                <div className="bg-green-500 text-white p-2 h-[100px] flex items-center justify-center">4</div>
                                <div className="bg-green-500 text-white p-2 h-[100px] flex items-center justify-center">5</div>
                                <div className="bg-green-500 text-white p-2 h-[100px] flex items-center justify-center">6</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">gap</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Определяет промежутки между элементами сетки:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`gap: 10px;`}
                            </pre>
                            <div className="mt-2 grid grid-cols-3 gap-2.5">
                                <div className="bg-blue-500 text-white p-2 flex items-center justify-center">1</div>
                                <div className="bg-blue-500 text-white p-2 flex items-center justify-center">2</div>
                                <div className="bg-blue-500 text-white p-2 flex items-center justify-center">3</div>
                                <div className="bg-blue-500 text-white p-2 flex items-center justify-center">4</div>
                                <div className="bg-blue-500 text-white p-2 flex items-center justify-center">5</div>
                                <div className="bg-blue-500 text-white p-2 flex items-center justify-center">6</div>
                            </div>
                        </div>
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`row-gap: 20px;
column-gap: 10px;`}
                            </pre>
                            <div className="mt-2 grid grid-cols-3 gap-x-2.5 gap-y-5">
                                <div className="bg-green-500 text-white p-2 flex items-center justify-center">1</div>
                                <div className="bg-green-500 text-white p-2 flex items-center justify-center">2</div>
                                <div className="bg-green-500 text-white p-2 flex items-center justify-center">3</div>
                                <div className="bg-green-500 text-white p-2 flex items-center justify-center">4</div>
                                <div className="bg-green-500 text-white p-2 flex items-center justify-center">5</div>
                                <div className="bg-green-500 text-white p-2 flex items-center justify-center">6</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">grid-template-areas</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Позволяет создавать именованные области в сетке:
                    </p>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`}
                    </pre>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                        <div className="bg-blue-500 text-white p-2 col-span-3">header</div>
                        <div className="bg-green-500 text-white p-2">sidebar</div>
                        <div className="bg-yellow-500 text-white p-2 col-span-2">main</div>
                        <div className="bg-red-500 text-white p-2 col-span-3">footer</div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Свойства элементов</h4>
            <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">grid-column и grid-row</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Определяют расположение элемента в сетке:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`.item-1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
}`}
                            </pre>
                            <div className="mt-2 grid grid-cols-3 gap-2">
                                <div className="bg-blue-500 text-white p-2 col-span-2">1</div>
                                <div className="bg-blue-500 text-white p-2">3</div>
                                <div className="bg-blue-500 text-white p-2">4</div>
                                <div className="bg-blue-500 text-white p-2">5</div>
                                <div className="bg-blue-500 text-white p-2">6</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">justify-self и align-self</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Выравнивание отдельного элемента внутри ячейки:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <pre className="bg-gray-100 p-2 rounded text-sm">
{`.item {
    justify-self: center;
    align-self: center;
}`}
                            </pre>
                            <div className="mt-2 grid grid-cols-3 gap-2 h-32 bg-gray-200">
                                <div className="bg-blue-500 text-white p-2 flex items-center justify-center">1</div>
                                <div className="bg-blue-500 text-white p-2 flex items-center justify-center">2</div>
                                <div className="bg-blue-500 text-white p-2 flex items-center justify-center">3</div>
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
                    <h5 className="font-medium mb-2">Пример 1: Макет страницы</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`<div class="page-layout">
    <header>Header</header>
    <nav>Navigation</nav>
    <main>Main Content</main>
    <aside>Sidebar</aside>
    <footer>Footer</footer>
</div>

.page-layout {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "nav main"
        "footer footer";
    min-height: 100vh;
}

header { grid-area: header; }
nav { grid-area: nav; }
main { grid-area: main; }
footer { grid-area: footer; }`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 2: Галерея изображений</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`<div class="gallery">
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
    <!-- ... -->
</div>

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
}

.gallery img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 3: Карточки с разной высотой</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`<div class="cards">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
</div>

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 1rem;
}

.card {
    background: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
                        <li>Используйте grid-template-areas для сложных макетов</li>
                        <li>Применяйте minmax() для адаптивных колонок</li>
                        <li>Используйте auto-fit или auto-fill для автоматического создания колонок</li>
                        <li>Комбинируйте Grid с Flexbox для сложных макетов</li>
                        <li>Используйте gap вместо margin для отступов между элементами</li>
                    </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Распространенные ошибки</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Забывают установить display: grid</li>
                        <li>Неправильно используют grid-template-columns</li>
                        <li>Игнорируют grid-template-areas для сложных макетов</li>
                        <li>Используют margin вместо gap</li>
                        <li>Не учитывают поддержку браузерами</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">7. Поддержка браузерами</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-4">
                    CSS Grid поддерживается всеми современными браузерами. Для старых версий может потребоваться
                    использование fallback-решений или префиксов.
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