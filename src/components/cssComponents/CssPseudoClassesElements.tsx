import React from 'react';

export const CssPseudoClassesElements: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Что такое псевдоклассы и псевдоэлементы?</h4>
            <p className="text-gray-600 leading-relaxed">
                Псевдоклассы и псевдоэлементы — это специальные ключевые слова в CSS, которые позволяют стилизовать
                элементы в определенном состоянии или создать виртуальные элементы. Они добавляются к селекторам через
                двоеточие (:) или двойное двоеточие (::).
            </p>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Псевдоклассы</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-600">Состояния элементов</h5>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">:hover</code>
                            <span className="text-gray-600 text-sm">При наведении курсора</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">:active</code>
                            <span className="text-gray-600 text-sm">При нажатии</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">:focus</code>
                            <span className="text-gray-600 text-sm">При фокусе</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">:visited</code>
                            <span className="text-gray-600 text-sm">Для посещенных ссылок</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-green-600">Структурные псевдоклассы</h5>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">:first-child</code>
                            <span className="text-gray-600 text-sm">Первый дочерний элемент</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">:last-child</code>
                            <span className="text-gray-600 text-sm">Последний дочерний элемент</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">:nth-child(n)</code>
                            <span className="text-gray-600 text-sm">n-й дочерний элемент</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">:not(selector)</code>
                            <span className="text-gray-600 text-sm">Отрицание селектора</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Псевдоэлементы</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-purple-600">Основные псевдоэлементы</h5>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">::before</code>
                            <span className="text-gray-600 text-sm">Создает элемент перед контентом</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">::after</code>
                            <span className="text-gray-600 text-sm">Создает элемент после контента</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">::first-line</code>
                            <span className="text-gray-600 text-sm">Первая строка текста</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">::first-letter</code>
                            <span className="text-gray-600 text-sm">Первая буква текста</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-orange-600">Дополнительные псевдоэлементы</h5>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">::selection</code>
                            <span className="text-gray-600 text-sm">Выделенный текст</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">::placeholder</code>
                            <span className="text-gray-600 text-sm">Плейсхолдер в input</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm">::marker</code>
                            <span className="text-gray-600 text-sm">Маркер списка</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Практические примеры</h4>
            <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 1: Стилизация ссылок</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`a {
    color: blue;
    text-decoration: none;
}

a:hover {
    color: red;
    text-decoration: underline;
}

a:active {
    color: green;
}

a:visited {
    color: purple;
}`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 2: Создание декоративных элементов</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`.fancy-box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    opacity: 0.1;
    z-index: -1;
}

.quote::before {
    content: """;
    font-size: 2em;
    color: #ff6b6b;
    margin-right: 0.5em;
}`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 3: Стилизация списков</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`li:first-child {
    font-weight: bold;
}

li:last-child {
    border-bottom: none;
}

li:nth-child(odd) {
    background-color: #f8f9fa;
}

li::marker {
    color: #ff6b6b;
}`}
                    </pre>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">5. Лучшие практики</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Рекомендации по использованию</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Используйте ::before и ::after для декоративных элементов</li>
                        <li>Применяйте :hover и :focus для улучшения UX</li>
                        <li>Используйте :nth-child для создания сложных паттернов</li>
                        <li>Не злоупотребляйте псевдоэлементами для важного контента</li>
                        <li>Помните о специфичности селекторов</li>
                    </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Распространенные ошибки</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Использование псевдоэлементов без content</li>
                        <li>Излишняя вложенность псевдоклассов</li>
                        <li>Использование псевдоэлементов для важного контента</li>
                        <li>Игнорирование доступности при использовании :hover</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">6. Поддержка браузерами</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-4">
                    Большинство современных псевдоклассов и псевдоэлементов поддерживаются всеми современными браузерами.
                    Однако некоторые новые функции могут требовать префиксов или иметь ограниченную поддержку.
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