import React from 'react';

export const CssBasics: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Что такое CSS</h4>
            <p className="text-gray-600 leading-relaxed">
                CSS (Cascading Style Sheets) — это язык описания стилей, который используется для
                определения внешнего вида и расположения элементов на веб-странице. CSS отделяет
                контент (HTML) от презентации, позволяя централизованно управлять цветами, шрифтами,
                отступами и другими визуальными свойствами.
            </p>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Селекторы и их типы</h4>
            <p className="text-gray-600 leading-relaxed">
                Селекторы позволяют выбрать элементы на странице для применения стилей:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                    <code className="bg-gray-100 px-1 rounded">* </code> — универсальный селектор;
                </li>
                <li>
                    <code className="bg-gray-100 px-1 rounded">element</code> (например, <code className="bg-gray-100 px-1 rounded">div</code>);
                </li>
                <li>
                    <code className="bg-gray-100 px-1 rounded">.class</code> — класс;
                </li>
                <li>
                    <code className="bg-gray-100 px-1 rounded">#id</code> — идентификатор;
                </li>
                <li>
                    комбинированные: <code className="bg-gray-100 px-1 rounded">div.container</code>,
                    <code className="bg-gray-100 px-1 rounded">ul &gt; li</code>, <code className="bg-gray-100 px-1 rounded">a:hover</code> и т.д.
                </li>
            </ul>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`/* Пример селекторов */
* { margin: 0; }
h1, h2, h3 { font-family: sans-serif; }
.navbar { background: #333; }
#main-content { padding: 16px; }
a:hover { color: blue; }`}
      </pre>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Блочная модель (Box Model)</h4>
            <p className="text-gray-600 leading-relaxed">
                Каждый элемент представлен прямоугольной моделью:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Content</strong> — содержимое элемента;</li>
                <li><strong>Padding</strong> — внутренние отступы вокруг содержимого;</li>
                <li><strong>Border</strong> — рамка вокруг padding;</li>
                <li><strong>Margin</strong> — внешние отступы между элементами.</li>
            </ul>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`/* Управление размерами */
div {
  width: 200px;
  padding: 10px;
  border: 2px solid #666;
  margin: 20px;
}
/* По умолчанию box-sizing: content-box; можно изменить на border-box */
* { box-sizing: border-box; }`}
      </pre>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Типы отображения и позиционирование</h4>
            <p className="text-gray-600 leading-relaxed">
                Свойство <code className="bg-gray-100 px-1 rounded">display</code> определяет,
                как элемент располагается на странице:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><code className="bg-gray-100 px-1 rounded">block</code> — блочный элемент (новая строка);</li>
                <li><code className="bg-gray-100 px-1 rounded">inline</code> — строчный элемент;</li>
                <li><code className="bg-gray-100 px-1 rounded">inline-block</code> — строчно-блочный;</li>
                <li><code className="bg-gray-100 px-1 rounded">none</code> — скрыть элемент;</li>
                <li>Позиционирование: <code className="bg-gray-100 px-1 rounded">static</code>,
                    <code className="bg-gray-100 px-1 rounded">relative</code>, <code className="bg-gray-100 px-1 rounded">absolute</code>,
                    <code className="bg-gray-100 px-1 rounded">fixed</code>, <code className="bg-gray-100 px-1 rounded">sticky</code>.</li>
            </ul>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`/* Пример позиционирования */
.container { position: relative; }
.child {
  position: absolute;
  top: 10px;
  right: 10px;
}
.sticky-header { position: sticky; top: 0; }`}
      </pre>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">5. Специфичность и наследование</h4>
            <p className="text-gray-600 leading-relaxed">
                Правила CSS могут конфликтовать. Для разрешения конфликта используется специфичность:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Inline-стили <code className="bg-gray-100 px-1 rounded">style="..."</code> имеют наивысший приоритет;</li>
                <li>Идентификаторы (#id) — следующий уровень;</li>
                <li>Классы (.class), атрибуты ([type="text"]) и псевдоклассы (:hover) — средний;</li>
                <li>Элементы (div, p) и псевдоэлементы (::before) — самый низкий;</li>
                <li>!important может переопределить почти всё, но использовать его стоит редко.</li>
            </ul>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`/* Специфичность */
#header { color: red; }       /* 1,0,0,0 */
.navbar .link { color: blue; } /* 0,1,1,0 */
p { color: green; }           /* 0,0,1,0 */
/* inline */                 /* 1,0,0,0 */
/* !important */             /* override */
`}
      </pre>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">6. Дополнительные инструменты и ресурсы</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>DevTools в браузере: инспекция, изменение стилей в реальном времени.</li>
                <li>Документация MDN: <a href="https://developer.mozilla.org/" target="_blank" className="text-blue-600 underline">developer.mozilla.org</a>.</li>
                <li>CSS-фреймворки: Tailwind CSS, Bootstrap, Bulma для ускоренной стилизации.</li>
            </ul>
        </section>
    </div>
);