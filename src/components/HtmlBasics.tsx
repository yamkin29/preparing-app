import React from 'react';

export const HtmlBasics: React.FC = () => (
    <>
        <h4>1. Что такое разметка HTML-документа и какие есть аналоги</h4>
        <p>
            HTML (HyperText Markup Language) — это язык разметки, который используется для
            структурирования и представления контента на веб-странице. Он описывает, какие
            элементы (заголовки, параграфы, изображения, ссылки и т. д.) должны отображаться
            браузером и в каком порядке.
        </p>
        <p>Аналоги и близкие технологии:</p>
        <ul>
            <li>
                <strong>XML</strong> — универсальный язык разметки для хранения и обмена данными;
            </li>
            <li>
                <strong>Markdown</strong> — упрощённый синтаксис для быстрого оформления текста;
            </li>
            <li>
                <strong>LaTeX</strong> — разметка для научных публикаций и математических формул.
            </li>
        </ul>

        <h4>2. Необходимые теги <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code></h4>
        <p>Каждый HTML-файл должен начинаться и заканчиваться тегами <code>&lt;html&gt;</code>:</p>
        <pre>
{`<!DOCTYPE html>
<html lang="ru">
  <head>
    <!-- Метаданные и подключения -->
  </head>
  <body>
    <!-- Видимое содержимое страницы -->
  </body>
</html>`}
    </pre>
        <ul>
            <li>
                <code>&lt;html lang="..."&gt;&lt;/html&gt;</code> — корневой элемент документа;
                атрибут <code>lang</code> указывает язык содержимого.
            </li>
            <li>
                <code>&lt;head&gt;&lt;/head&gt;</code> — скрытая часть с метаданными:
                <ul>
                    <li><code>&lt;meta charset="UTF-8"&gt;</code> — кодировка;</li>
                    <li><code>&lt;title&gt;…&lt;/title&gt;</code> — заголовок вкладки;</li>
                    <li>подключение CSS: <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>;</li>
                    <li>подключение скриптов: <code>&lt;script src="app.js" defer&gt;&lt;/script&gt;</code>.</li>
                </ul>
            </li>
            <li>
                <code>&lt;body&gt;&lt;/body&gt;</code> — видимая часть:
                сюда помещаются все элементы, которые рендерит пользовательский браузер.
            </li>
        </ul>

        <h4>3. Основные и новые теги HTML5</h4>
        <p>HTML5 ввёл семантические теги, чтобы сделать структуру страницы более осмысленной:</p>
        <ul>
            <li>
                <strong>Секции и обёртки</strong>:
                <ul>
                    <li><code>&lt;header&gt;</code> — шапка страницы или раздела;</li>
                    <li><code>&lt;nav&gt;</code> — навигационные ссылки;</li>
                    <li><code>&lt;main&gt;</code> — основной контент;</li>
                    <li><code>&lt;section&gt;</code> — тематический раздел;</li>
                    <li><code>&lt;article&gt;</code> — самостоятельный фрагмент (пост, новость);</li>
                    <li><code>&lt;aside&gt;</code> — побочный контент (сайдбар, реклама);</li>
                    <li><code>&lt;footer&gt;</code> — футер страницы или раздела.</li>
                </ul>
            </li>
            <li>
                <strong>Мультимедиа</strong>:
                <ul>
                    <li><code>&lt;audio&gt;</code> — аудио-контент;</li>
                    <li><code>&lt;video&gt;</code> — видеоконтент;</li>
                    <li><code>&lt;source&gt;</code> — источник для <code>&lt;audio&gt;</code> и <code>&lt;video&gt;</code>;</li>
                    <li><code>&lt;canvas&gt;</code> — рисование графики через скрипты.</li>
                </ul>
            </li>
            <li>
                <strong>Формы</strong>:
                <ul>
                    <li><code>&lt;form&gt;</code> — контейнер формы;</li>
                    <li><code>&lt;input&gt;</code> — текст, email, пароль и т. д.;</li>
                    <li><code>&lt;textarea&gt;</code> — многострочное поле;</li>
                    <li><code>&lt;button&gt;</code> — кнопка;</li>
                    <li><code>&lt;label&gt;</code> — метка для поля;</li>
                    <li><code>&lt;select&gt;</code> и <code>&lt;option&gt;</code> — выпадающий список.</li>
                </ul>
            </li>
            <li>
                <strong>Текстовые и медиа-обёртки</strong>:
                <ul>
                    <li><code>&lt;p&gt;</code> — параграф;</li>
                    <li><code>&lt;h1&gt;…&lt;h6&gt;</code> — заголовки разного уровня;</li>
                    <li><code>&lt;img src="..." alt="..."/&gt;</code> — изображение;</li>
                    <li><code>&lt;figure&gt;</code> и <code>&lt;figcaption&gt;</code> — изображение с подписью;</li>
                    <li><code>&lt;blockquote&gt;</code> — длинная цитата;</li>
                    <li><code>&lt;mark&gt;</code> — выделенный текст;</li>
                    <li><code>&lt;time datetime="..."&gt;</code> — дата/время.</li>
                </ul>
            </li>
            <li>
                <strong>Списки и таблицы</strong>:
                <ul>
                    <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code> — списки;</li>
                    <li><code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code> — таблицы.</li>
                </ul>
            </li>
        </ul>

        <h4>4. Пример полной структуры HTML5-документа</h4>
        <pre>
{`<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Пример HTML5-документа</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>Заголовок сайта</h1>
      <nav>
        <ul>
          <li><a href="#main">Главная</a></li>
          <li><a href="#about">О нас</a></li>
        </ul>
      </nav>
    </header>

    <main id="main">
      <section>
        <h2>Секция контента</h2>
        <p>Описание секции …</p>
      </section>
      <article>
        <h2>Статья</h2>
        <p>Текст статьи …</p>
      </article>
      <aside>
        <h3>Сайдбар</h3>
        <p>Дополнительная информация …</p>
      </aside>
    </main>

    <footer>
      <p>© 2025 Моя компания</p>
    </footer>

    <script src="app.js" defer></script>
  </body>
</html>`}
    </pre>
    </>
);
