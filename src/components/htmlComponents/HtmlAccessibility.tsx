import React from 'react';

export const HtmlAccessibility: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">
                1. Что такое веб-доступность (Accessibility)
            </h4>
            <p className="text-gray-600 leading-relaxed">
                Веб-доступность — это практика создания сайтов и приложений таким образом,
                чтобы ими могли пользоваться люди с различными ограничениями: нарушения
                зрения, слуха, моторики или когнитивные особенности. Аксессиблити обеспечивает
                равный доступ к информации и функциональности для всех пользователей.
            </p>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">
                2. Роль семантики и правильных атрибутов
            </h4>
            <p className="text-gray-600 leading-relaxed">
                Семантическая разметка и правильные HTML-атрибуты помогают вспомогательным
                технологиям (скринридерам) понимать структуру и смысл элементов на странице.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                    <code className="bg-gray-100 px-1 rounded">alt</code> для <code className="bg-gray-100 px-1 rounded">&lt;img&gt;</code> — краткое описание изображения.
                </li>
                <li>
                    <code className="bg-gray-100 px-1 rounded">aria-label</code> или <code className="bg-gray-100 px-1 rounded">aria-labelledby</code> для интерактивных элементов.
                </li>
                <li>
                    Использование семантических тегов (<code className="bg-gray-100 px-1 rounded">&lt;nav&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;main&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;footer&gt;</code>).
                </li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">
                3. Доступные формы и интерактивность
            </h4>
            <p className="text-gray-600 leading-relaxed">
                Для форм и интерактивных контролов важно связывать метки с полями и управлять фокусом.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                    <code className="bg-gray-100 px-1 rounded">&lt;label for="email"&gt;</code> связывает метку с <code className="bg-gray-100 px-1 rounded">&lt;input id="email"&gt;</code>.
                </li>
                <li>
                    Добавлять подсказки через <code className="bg-gray-100 px-1 rounded">aria-describedby</code>.
                </li>
                <li>
                    Использовать кнопки <code className="bg-gray-100 px-1 rounded">&lt;button&gt;</code>, а не <code className="bg-gray-100 px-1 rounded">&lt;div role="button"&gt;</code>, чтобы получить корректную обработку клавиатуры.
                </li>
            </ul>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`<label for="password">Пароль:</label>
<input id="password" type="password" aria-describedby="pwdHelp" />
<small id="pwdHelp">Не менее 8 символов.</small>
<button aria-label="Показать пароль">👁️</button>`}
      </pre>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">
                4. Навигация и управление фокусом
            </h4>
            <p className="text-gray-600 leading-relaxed">
                Пользователи клавиатурной навигации должны легко переходить по элементам с помощью Tab.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Порядок фокуса соответствует визуальному порядку.</li>
                <li>
                    Использовать <code className="bg-gray-100 px-1 rounded">tabindex</code> аккуратно: <code className="bg-gray-100 px-1 rounded">tabindex="0"</code> — включить, <code className="bg-gray-100 px-1 rounded">-1</code> — убрать.
                </li>
                <li>
                    Явная подсветка фокуса через CSS (например, <code className="bg-gray-100 px-1 rounded outline outline-2 outline-blue-500 focus:outline-none">:focus</code>).
                </li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">
                5. Контрастность и визуальные рекомендации
            </h4>
            <p className="text-gray-600 leading-relaxed">
                Текст и интерфейс должны быть читаемы при разных условиях зрения.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Соотношение контрастности минимум 4.5:1 для текста (WCAG AA).</li>
                <li>Не полагаться только на цвет, добавлять иконки или текстовые метки.</li>
                <li>Тестировать с эмуляторами дальтонизма и инструментами типа Lighthouse.</li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">
                6. Тестирование доступности
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Использовать автоматические проверки: Lighthouse, axe.</li>
                <li>Проверять вручную: навигация клавиатурой, чтение скринридером (NVDA, VoiceOver).</li>
                <li>Привлекать реальных пользователей с особыми потребностями для обратной связи.</li>
            </ul>
        </section>
    </div>
);