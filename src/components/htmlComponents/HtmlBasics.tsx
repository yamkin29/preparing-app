import React from 'react';

export const HtmlBasics: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Что такое разметка HTML-документа и какие есть аналоги</h4>
            <p className="text-gray-600 leading-relaxed">
                HTML (HyperText Markup Language) — это язык разметки, который используется для
                структурирования и представления контента на веб-странице. Он описывает, какие
                элементы (заголовки, параграфы, изображения, ссылки и т. д.) должны отображаться
                браузером и в каком порядке.
            </p>
            <p className="text-gray-600 font-medium">Аналоги и близкие технологии:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                    <strong className="text-gray-800">XML</strong> — универсальный язык разметки для хранения и обмена данными;
                </li>
                <li>
                    <strong className="text-gray-800">Markdown</strong> — упрощённый синтаксис для быстрого оформления текста;
                </li>
                <li>
                    <strong className="text-gray-800">LaTeX</strong> — разметка для научных публикаций и математических формул.
                </li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Необходимые теги <code className="bg-gray-100 px-1 rounded">&lt;html&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;head&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;body&gt;</code></h4>
            <p className="text-gray-600">Каждый HTML-файл должен начинаться и заканчиваться тегами <code className="bg-gray-100 px-1 rounded">&lt;html&gt;</code>:</p>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
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
            <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>
                    <code className="bg-gray-100 px-1 rounded">&lt;html lang="..."&gt;&lt;/html&gt;</code> — корневой элемент документа;
                    атрибут <code className="bg-gray-100 px-1 rounded">lang</code> указывает язык содержимого.
                </li>
                <li>
                    <code className="bg-gray-100 px-1 rounded">&lt;head&gt;&lt;/head&gt;</code> — скрытая часть с метаданными:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                        <li><code className="bg-gray-100 px-1 rounded">&lt;meta charset="UTF-8"&gt;</code> — кодировка;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;title&gt;…&lt;/title&gt;</code> — заголовок вкладки;</li>
                        <li>подключение CSS: <code className="bg-gray-100 px-1 rounded">&lt;link rel="stylesheet" href="styles.css"&gt;</code>;</li>
                        <li>подключение скриптов: <code className="bg-gray-100 px-1 rounded">&lt;script src="app.js" defer&gt;&lt;/script&gt;</code>.</li>
                    </ul>
                </li>
                <li>
                    <code className="bg-gray-100 px-1 rounded">&lt;body&gt;&lt;/body&gt;</code> — видимая часть:
                    сюда помещаются все элементы, которые рендерит пользовательский браузер.
                </li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Основные и новые теги HTML5</h4>
            <p className="text-gray-600">HTML5 ввёл семантические теги, чтобы сделать структуру страницы более осмысленной:</p>
            <ul className="space-y-4 text-gray-600">
                <li>
                    <strong className="text-gray-800 block mb-2">Секции и обёртки:</strong>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                        <li><code className="bg-gray-100 px-1 rounded">&lt;header&gt;</code> — шапка страницы или раздела;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;nav&gt;</code> — навигационные ссылки;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;main&gt;</code> — основной контент;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;section&gt;</code> — тематический раздел;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;article&gt;</code> — самостоятельный фрагмент (пост, новость);</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;aside&gt;</code> — побочный контент (сайдбар, реклама);</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;footer&gt;</code> — футер страницы или раздела.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-gray-800 block mb-2">Мультимедиа:</strong>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                        <li><code className="bg-gray-100 px-1 rounded">&lt;audio&gt;</code> — аудио-контент;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;video&gt;</code> — видеоконтент;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;source&gt;</code> — источник для <code className="bg-gray-100 px-1 rounded">&lt;audio&gt;</code> и <code className="bg-gray-100 px-1 rounded">&lt;video&gt;</code>;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;canvas&gt;</code> — рисование графики через скрипты.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-gray-800 block mb-2">Формы:</strong>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                        <li><code className="bg-gray-100 px-1 rounded">&lt;form&gt;</code> — контейнер формы;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;input&gt;</code> — текст, email, пароль и т. д.;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;textarea&gt;</code> — многострочное поле;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;button&gt;</code> — кнопка;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;label&gt;</code> — метка для поля;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;select&gt;</code> и <code className="bg-gray-100 px-1 rounded">&lt;option&gt;</code> — выпадающий список.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-gray-800 block mb-2">Текстовые и медиа-обёртки:</strong>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                        <li><code className="bg-gray-100 px-1 rounded">&lt;p&gt;</code> — параграф;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;h1&gt;…&lt;h6&gt;</code> — заголовки разного уровня;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;img src="..." alt="..."/&gt;</code> — изображение;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;figure&gt;</code> и <code className="bg-gray-100 px-1 rounded">&lt;figcaption&gt;</code> — изображение с подписью;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;blockquote&gt;</code> — длинная цитата;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;mark&gt;</code> — выделенный текст;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;time datetime="..."&gt;</code> — дата/время.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-gray-800 block mb-2">Списки и таблицы:</strong>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                        <li><code className="bg-gray-100 px-1 rounded">&lt;ul&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;ol&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;li&gt;</code> — списки;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;table&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;thead&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;tbody&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;tr&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;th&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;td&gt;</code> — таблицы.</li>
                    </ul>
                </li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Пример полной структуры HTML5-документа</h4>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html> <!-- Определяет тип документа как HTML5 -->
<html lang="ru"> <!-- Корневой элемент документа, lang указывает язык содержимого -->
  <head> <!-- Секция метаданных (скрытая) -->
    <meta charset="UTF-8" /> <!-- Определяет кодировку документа -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!-- Обеспечивает адаптивность на мобильных устройствах -->
    <title>Пример HTML5-документа</title> <!-- Заголовок страницы, отображается во вкладке браузера -->
    <link rel="stylesheet" href="styles.css" /> <!-- Подключение внешнего CSS -->
  </head> <!-- Конец секции метаданных -->
  <body> <!-- Начало видимой части страницы -->
    <header> <!-- Шапка сайта или раздела -->
      <h1>Заголовок сайта</h1> <!-- Основной заголовок страницы -->
      <nav> <!-- Навигационное меню -->
        <ul> <!-- Список навигационных ссылок -->
          <li><a href="#main">Главная</a></li> <!-- Ссылка на основной контент -->
          <li><a href="#about">О нас</a></li> <!-- Ссылка на раздел "О нас" -->
        </ul>
      </nav> <!-- Конец навигации -->
    </header> <!-- Конец шапки -->

    <main id="main"> <!-- Основной контент страницы -->
      <section> <!-- Тематический раздел -->
        <h2>Секция контента</h2> <!-- Заголовок раздела -->
        <p>Описание секции …</p> <!-- Параграф с описанием -->
      </section> <!-- Конец тем. раздела -->
      <article> <!-- Самостоятельный фрагмент контента (статья) -->
        <h2>Статья</h2> <!-- Заголовок статьи -->
        <p>Текст статьи …</p> <!-- Параграф статьи -->
      </article> <!-- Конец статьи -->
      <aside> <!-- Боковая панель (доп. информация) -->
        <h3>Сайдбар</h3> <!-- Заголовок боковой панели -->
        <p>Дополнительная информация …</p> <!-- Параграф дополнительной информации -->
      </aside> <!-- Конец боковой панели -->
    </main> <!-- Конец основного контента -->

    <footer> <!-- Футер страницы (подвал) -->
      <p>© 2025 Моя компания</p> <!-- Информация о копирайте -->
    </footer> <!-- Конец футера -->

    <script src="app.js" defer></script> <!-- Подключение JavaScript с отложенной загрузкой -->
  </body> <!-- Конец видимой части страницы -->
</html> <!-- Конец HTML-документа -->`}
            </pre>
        </section>
    </div>
);
