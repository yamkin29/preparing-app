import React from 'react';

export const SeoBasics: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Что такое SEO</h4>
            <p className="text-gray-600 leading-relaxed">
                SEO (Search Engine Optimization) — комплекс мер по оптимизации сайта для
                улучшения его позиций в результатах поисковых систем (Google, Яндекс и др.).
                Цель — привлечь органический (неплатный) трафик.
            </p>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Как работают поисковые роботы</h4>
            <p className="text-gray-600 leading-relaxed">
                Поисковые системы используют роботов (краулеров), которые сканируют интернет:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                    <strong>Сканирование (Crawling):</strong> робот проходит по ссылкам на страницах,
                    собирая HTML-код для дальнейшего анализа.
                </li>
                <li>
                    <strong>Индексация (Indexing):</strong> собранный контент сохраняется в базе данных,
                    где анализируются ключевые слова, заголовки, метатеги и структура.
                </li>
                <li>
                    <strong>Ранжирование (Ranking):</strong> при показе пользователю определяется порядок
                    страниц на основе релевантности, скорости загрузки, удобства и других факторов.
                </li>
            </ul>
            <p className="text-gray-600">
                Файлы <code className="bg-gray-100 px-1 rounded">robots.txt</code> и sitemap.xml помогают
                управлять тем, что и как индексируется.
            </p>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`# robots.txt
User-agent: *
Disallow: /admin/
Allow: /

Sitemap: https://example.com/sitemap.xml`}
      </pre>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Аудит и проверка SEO</h4>
            <p className="text-gray-600 leading-relaxed">
                Регулярный SEO-аудит помогает выявить ошибки и возможности для роста:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Проверка метатегов:</strong> <code className="bg-gray-100 px-1 rounded">title</code>,
                    <code className="bg-gray-100 px-1 rounded">meta description</code>,
                    <code className="bg-gray-100 px-1 rounded">h1-h6</code> — корректность и уникальность.
                </li>
                <li><strong>Анализ контента:</strong> плотность ключевых слов, читаемость, структура заголовков.</li>
                <li><strong>Скорость загрузки:</strong> оптимизация изображений, кэширование, минимизация кода.</li>
                <li><strong>Адаптивность:</strong> качество отображения на мобильных устройствах.</li>
                <li><strong>Внутренние и внешние ссылки:</strong> наличие «битых» ссылок и влияние обратных ссылок (backlinks).</li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Как улучшить SEO</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                    <strong>Качественный контент:</strong> пишите полезные статьи с уникальными данными и примерами.
                </li>
                <li>
                    <strong>Оптимизация ключевых слов:</strong> исследуйте запросы через инструменты (Google Keyword Planner, Яндекс.Вордстат)
                    и внедряйте естественно в тексты.
                </li>
                <li>
                    <strong>Техническая оптимизация:</strong> ускорьте сайт (Lazy Load, CDN), улучшите структуру URL и навигацию.
                </li>
                <li>
                    <strong>Мобильная версия:</strong> убедитесь, что сайт корректно работает на всех экранах.
                </li>
                <li>
                    <strong>Работа с внешними ссылками:</strong> наращивайте качественные обратные ссылки с авторитетных ресурсов.
                </li>
                <li>
                    <strong>Мониторинг:</strong> подключите Google Search Console, Яндекс.Вебмастер и следите за метриками.
                </li>
            </ul>
        </section>
    </div>
);