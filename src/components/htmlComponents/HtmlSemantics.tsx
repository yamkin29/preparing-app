import React from 'react';

export const HtmlSemantics: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Что такое семантическая разметка</h4>
            <p className="text-gray-600 leading-relaxed">
                Семантическая разметка — это использование HTML-элементов по их смысловому назначению.
                Вместо универсальных контейнеров <code className="bg-gray-100 px-1 rounded">&lt;div&gt;</code> и
                <code className="bg-gray-100 px-1 rounded">&lt;span&gt;</code> мы применяем теги, отражающие структуру и роль содержимого:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                    Семантика улучшает доступность: скринридеры и другие ассистивные технологии понимают,
                    что внутри навигации находится именно меню, а внутри <code className="bg-gray-100 px-1 rounded">&lt;article&gt;</code> –
                    полноценная статья.
                </li>
                <li>
                    Поиск и SEO: поисковые системы анализируют семантическую структуру и лучше индексируют контент.
                </li>
                <li>
                    Поддерживаемость: код становится самодокументируемым и понятным новым разработчикам.
                </li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Сравнение семантических и несемантических тегов</h4>
            <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>
                    <strong className="text-gray-800">Несемантический:</strong>
                    <code className="bg-gray-100 px-1 rounded">&lt;div&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;span&gt;</code>
                    — просто контейнеры без явного смысла.
                </li>
                <li>
                    <strong className="text-gray-800">Семантический:</strong>
                    <code className="bg-gray-100 px-1 rounded">&lt;header&gt;</code>,
                    <code className="bg-gray-100 px-1 rounded">&lt;nav&gt;</code>,
                    <code className="bg-gray-100 px-1 rounded">&lt;main&gt;</code>,
                    <code className="bg-gray-100 px-1 rounded">&lt;section&gt;</code>,
                    <code className="bg-gray-100 px-1 rounded">&lt;article&gt;</code>,
                    <code className="bg-gray-100 px-1 rounded">&lt;aside&gt;</code>,
                    <code className="bg-gray-100 px-1 rounded">&lt;footer&gt;</code> и др.
                </li>
            </ul>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`/* Несемантический пример */
<div class="wrapper">
  <div class="top-bar">Лого и меню</div>
  <div class="content">Мain content</div>
  <div class="footer">Футер</div>
</div>

/* Семантический пример */
<header>Лого и навигация</header>
<main>Основной контент</main>
<footer>Контакты и копирайт</footer>
`}
      </pre>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Основные семантические элементы HTML5</h4>
            <ul className="space-y-4 text-gray-600">
                <li>
                    <strong className="text-gray-800 block mb-1">Структурные контейнеры:</strong>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                        <li><code className="bg-gray-100 px-1 rounded">&lt;header&gt;</code> — шапка сайта/секции;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;nav&gt;</code> — область навигационных ссылок;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;main&gt;</code> — основной уникальный контент страницы;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;section&gt;</code> — тематический раздел;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;article&gt;</code> — самостоятельный фрагмент (статья, блог-пост);</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;aside&gt;</code> — побочное содержимое (сайдбар, реклама);</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;footer&gt;</code> — нижняя часть сайта/секции.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-gray-800 block mb-1">Текстовые семантические теги:</strong>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                        <li><code className="bg-gray-100 px-1 rounded">&lt;figure&gt;</code> + <code className="bg-gray-100 px-1 rounded">&lt;figcaption&gt;</code> — изображение с подписью;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;blockquote&gt;</code> — выделенная цитата;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;mark&gt;</code> — подсветка текста;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;time datetime="..."&gt;</code> — дата или время;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;address&gt;</code> — контактная информация автора/организации.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-gray-800 block mb-1">Мультимедиа и интерактивность:</strong>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                        <li><code className="bg-gray-100 px-1 rounded">&lt;video&gt;</code>,
                            <code className="bg-gray-100 px-1 rounded">&lt;audio&gt;</code>,
                            <code className="bg-gray-100 px-1 rounded">&lt;canvas&gt;</code> — для мультимедиа и рисования;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;details&gt;</code> + <code className="bg-gray-100 px-1 rounded">&lt;summary&gt;</code> — раскрывающиеся блоки;</li>
                        <li><code className="bg-gray-100 px-1 rounded">&lt;dialog&gt;</code> — модальные окна.</li>
                    </ul>
                </li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Рекомендации по использованию</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Всегда выбирайте максимально подходящий тег по смыслу.</li>
                <li>Не оборачивайте семантический тег в лишний <code className="bg-gray-100 px-1 rounded">&lt;div&gt;</code>, если это не требуется для стилей.</li>
                <li>Проверяйте валидность разметки через <a href="https://validator.w3.org/" target="_blank" className="text-blue-600 underline">W3C Validator</a>.</li>
                <li>Для сложных интерфейсов комбинируйте семантические теги с ARIA-атрибутами для лучшей доступности.</li>
            </ul>
        </section>
    </div>
);