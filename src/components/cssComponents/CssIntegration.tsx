import React from 'react';

export const CssIntegration: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">
                1. Способы подключения CSS
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                    <strong className="text-gray-800">External CSS</strong> — классический способ:
                    файл <code className="bg-gray-100 px-1 rounded">styles.css</code> подключается в <code className="bg-gray-100 px-1 rounded">&lt;head&gt;</code>:
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`<link rel="stylesheet" href="/styles.css">`}
                    </pre>
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>…</body>
</html>`}
                    </pre>
                </li>
                <li>
                    <strong className="text-gray-800">Internal CSS</strong> — стили внутри <code className="bg-gray-100 px-1 rounded">&lt;head&gt;</code>:
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`<style>
  body { margin: 0; }
  h1 { color: #333; }
</style>`}
                    </pre>
                </li>
                <li>
                    <strong className="text-gray-800">Inline Styles</strong> — в самих тегах:
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`<h1 style="color: blue; margin: 16px;">Заголовок</h1>`}
                    </pre>
                </li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">
                2. Подключение CSS в React-проектах
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                    <strong>Импорт глобальных CSS</strong>: просто импортируем в entry-point (например, <code className="bg-gray-100 px-1 rounded">index.tsx</code>):
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));`}
                    </pre>
                </li>
                <li>
                    <strong>CSS Modules</strong>: файл <code className="bg-gray-100 px-1 rounded">Button.module.css</code>:
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`/* Button.module.css */
.button {
  background: #0070f3;
  color: white;
}`}
                    </pre>
                    Импорт в компоненте:
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`import styles from './Button.module.css';

export const Button = () => (
  <button className={styles.button}>Клик</button>
);`}
                    </pre>
                </li>
                <li>
                    <strong>Styled Components</strong> (CSS-in-JS):
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`import styled from 'styled-components';

const Title = styled.h1\`
  font-size: 2rem;
  color: #333;
\`;

export const App = () => <Title>Привет!</Title>;`}
                    </pre>
                </li>
                <li>
                    <strong>Tailwind CSS</strong> — утилитарный подход:
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
  Кнопка
</button>`}
                    </pre>
                </li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">
                3. Препроцессоры и автопрефиксы
            </h4>
            <p className="text-gray-600 leading-relaxed">
                Sass/SCSS и LESS расширяют возможности CSS: переменные, вложенность и миксины.
            </p>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`// Пример SCSS
$primary: #0070f3;

.container {
  padding: 16px;

  .title {
    color: $primary;
  }
}`}
            </pre>
            <p className="text-gray-600 leading-relaxed">
                PostCSS с плагином Autoprefixer автоматически добавляет вендорные префиксы:
            </p>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`/* Исходный CSS */
.box {
  display: flex;
}`}
            </pre>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`/* После Autoprefixer */
.box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}`}
            </pre>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">
                4. Лучшие практики
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Организуйте файлы по компонентам или функциональным модулям.</li>
                <li>Используйте методологии БЭМ или ITCSS для поддержки читаемости.</li>
                <li>Минимизируйте CSS в production-сборке.</li>
                <li>Отделяйте style logic от бизнес-логики компонента.</li>
                <li>Следите за порядком подключения (reset → базовые стили → компоненты → утилиты).</li>
            </ul>
        </section>
    </div>
);