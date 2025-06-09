import React from 'react';

export const CssDevTools: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Основы работы с DevTools</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Доступ к DevTools</h5>
                    <p className="text-gray-600 mb-4">
                        DevTools (инструменты разработчика) - это встроенные в браузер инструменты для отладки и разработки веб-страниц. 
                        Они позволяют инспектировать HTML, CSS и JavaScript код, а также отлаживать проблемы с версткой.
                    </p>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* Способы открытия DevTools */
1. F12 или Ctrl+Shift+I (Windows/Linux)
2. Cmd+Option+I (Mac)
3. Правый клик на элементе -> "Просмотреть код"
4. Ctrl+Shift+C (Windows/Linux) или Cmd+Option+C (Mac) для инспектора элементов`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Инспекция CSS</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Работа с CSS в DevTools</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* Основные возможности инспекции CSS */
1. Просмотр примененных стилей
2. Редактирование значений в реальном времени
3. Добавление новых свойств
4. Отключение/включение свойств
5. Просмотр каскада и специфичности
6. Анализ блочной модели

/* Пример работы с блочной моделью */
.element {
    /* В DevTools можно увидеть:
       - margin
       - border
       - padding
       - content
       - box-sizing
    */
    margin: 20px;
    padding: 15px;
    border: 1px solid #ccc;
    width: 200px;
    height: 100px;
    box-sizing: border-box;
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Отладка проблем</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Поиск и исправление ошибок</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* Шаги отладки CSS */
1. Проверка примененных стилей
   - Какие стили применяются
   - Какие стили переопределяются
   - Откуда приходят стили

2. Анализ специфичности
   - Проверка приоритетов селекторов
   - Поиск конфликтующих стилей
   - Использование !important

3. Проверка блочной модели
   - Размеры элементов
   - Отступы и границы
   - Проблемы с переполнением

4. Адаптивность
   - Тестирование на разных размерах экрана
   - Проверка медиа-запросов
   - Анализ flexbox/grid layouts`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Создание тестового примера</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Изоляция проблемы</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* Создание минимального тестового примера */
1. Удаление несвязанного кода
   - Оставить только проблемный HTML
   - Оставить только релевантные стили
   - Убрать лишний JavaScript

2. Проверка в изоляции
   - Тестирование в отдельном файле
   - Использование CodePen/JSFiddle
   - Проверка в разных браузерах

3. Документирование
   - Описание ожидаемого поведения
   - Описание текущего поведения
   - Шаги для воспроизведения`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">5. Полезные инструменты</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Дополнительные возможности</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* Инструменты для отладки CSS */
1. Color Picker
   - Выбор цветов
   - Конвертация форматов
   - Проверка контраста

2. Box Model Viewer
   - Визуализация отступов
   - Размеры элементов
   - Проблемы с переполнением

3. Flexbox/Grid Inspector
   - Визуализация сеток
   - Отладка выравнивания
   - Проверка размеров

4. Device Mode
   - Тестирование адаптивности
   - Эмуляция устройств
   - Проверка медиа-запросов

5. Performance
   - Анализ производительности
   - Отладка анимаций
   - Оптимизация рендеринга`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">6. Лучшие практики</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Рекомендации по отладке</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Используйте систематический подход к отладке</li>
                        <li>Проверяйте специфичность селекторов</li>
                        <li>Создавайте минимальные тестовые примеры</li>
                        <li>Документируйте найденные проблемы</li>
                        <li>Тестируйте в разных браузерах</li>
                        <li>Используйте инструменты для оптимизации</li>
                        <li>Следите за производительностью</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
); 