import React from 'react';

export const CssCascadeSpecificity: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Что такое каскадность (Cascade)</h4>
            <p className="text-gray-600 leading-relaxed">
                Каскад (Cascade) — механизм, по которому браузер определяет, какие стили применять,
                когда одно и то же свойство задано в нескольких правилах. Он учитывает:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Origin</strong> (происхождение стиля): user agent, user, author;</li>
                <li><strong>Importance</strong>: обычные правила vs. <code className="bg-gray-100 px-1 rounded">!important</code>;</li>
                <li><strong>Specificity</strong> (специфичность селекторов);
                </li>
                <li><strong>Source Order</strong>: порядок следования в исходном коде.</li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Приоритетность (Order of Precedence)</h4>
            <p className="text-gray-600 leading-relaxed">
                При конфликте нескольких правил браузер применит то, у которого выше приоритет:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li><code className="bg-gray-100 px-1 rounded">!important</code> у авторских стилей;</li>
                <li><code className="bg-gray-100 px-1 rounded">!important</code> у пользовательских стилей;</li>
                <li>Обычные авторские стили;</li>
                <li>Обычные пользовательские стили;</li>
                <li>User Agent (браузерные) стили.</li>
            </ol>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Специфичность селекторов (Specificity)</h4>
            <p className="text-gray-600 leading-relaxed">
                Специфичность вычисляется по четырём уровням: <code className="bg-gray-100 px-1 rounded">a,b,c,d</code>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>a</strong> — inline-стили (1 если есть, иначе 0);</li>
                <li><strong>b</strong> — количество ID селекторов;</li>
                <li><strong>c</strong> — количество классов, атрибутов и псевдоклассов;</li>
                <li><strong>d</strong> — количество элементных селекторов и псевдоэлементов.</li>
            </ul>
            <p className="text-gray-600">Чем выше число (a,b,c,d), тем выше приоритет.</p>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Примеры вычисления специфичности</h4>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
{`/* 1 */ body div p        => (0,0,0,3)
/* 2 */ .content p         => (0,0,1,1)
/* 3 */ #main .content p   => (0,1,1,1)
/* 4 */ [type="text"]     => (0,0,1,0)
/* 5 */ h1#title            => (0,1,0,1)
/* 6 */ .btn:hover          => (0,0,2,0)
/* 7 */ style="color:red"  => (1,0,0,0)`}
      </pre>
            <p className="text-gray-600 leading-relaxed">
                В примере правило <code className="bg-gray-100 px-1 rounded">#main .content p</code>
                (0,1,1,1) победит <code className="bg-gray-100 px-1 rounded">.content p</code> (0,0,1,1).
            </p>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">5. Порядок слоёв каскада</h4>
            <p className="text-gray-600 leading-relaxed">
                Итоговый приоритет для обычных авторских стилей:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>1) Правила с <code className="bg-gray-100 px-1 rounded">!important</code> (author)</li>
                <li>2) Правила с большим значением специфичности</li>
                <li>3) Правила, объявленные позже в коде</li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">6. Лучшие практики</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Минимизируйте использование <code className="bg-gray-100 px-1 rounded">!important</code>.</li>
                <li>Используйте простые селекторы и избегайте излишней вложенности.</li>
                <li>Придерживайтесь методологий (БЭМ, SMACSS) для управляемой специфичности.</li>
                <li>При необходимости сбрасывайте стили (CSS Reset / Normalize.css).</li>
            </ul>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">7. Интерактивный пример специфичности</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                    <p className="text-gray-600 mb-2">Пример 1: Конфликт классов</p>
                    <div className="bg-white p-4 border rounded">
                        <div className="text-blue-500 text-red-500">
                            Этот текст будет красным, так как .text-red-500 объявлен позже
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600 mb-2">Пример 2: Специфичность ID vs Class</p>
                    <div className="bg-white p-4 border rounded">
                        <div id="special-text" className="text-blue-500">
                            Этот текст будет синим, так как ID имеет большую специфичность
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">8. Визуальное представление специфичности</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Уровни специфичности:</h5>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded">1</div>
                            <span className="ml-2">Inline styles</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-yellow-500 text-white flex items-center justify-center rounded">2</div>
                            <span className="ml-2">ID selectors</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded">3</div>
                            <span className="ml-2">Classes, attributes, pseudo-classes</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded">4</div>
                            <span className="ml-2">Elements, pseudo-elements</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Примеры весов:</h5>
                    <ul className="space-y-2 text-sm">
                        <li><code className="bg-gray-100 px-1 rounded">#nav .item p</code> = (0,1,1,1)</li>
                        <li><code className="bg-gray-100 px-1 rounded">.menu {'>'} li</code> = (0,0,1,1)</li>
                        <li><code className="bg-gray-100 px-1 rounded">div p span</code> = (0,0,0,3)</li>
                        <li><code className="bg-gray-100 px-1 rounded">[type="text"]</code> = (0,0,1,0)</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">9. Распространенные проблемы и решения</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Проблема: Стили не применяются</h5>
                    <p className="text-gray-600">Решение: Проверьте специфичность селекторов и порядок их объявления.</p>
                    <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
{`/* Не работает */
.button { color: blue; }
#special-button { color: red; }

/* Работает */
#special-button { color: red; }
.button { color: blue; }`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Проблема: Слишком высокая специфичность</h5>
                    <p className="text-gray-600">Решение: Используйте более простые селекторы и избегайте излишней вложенности.</p>
                    <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
{`/* Слишком сложно */
#header .nav .menu .item a { color: blue; }

/* Лучше */
.menu-link { color: blue; }`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Проблема: Конфликты с фреймворками</h5>
                    <p className="text-gray-600">Решение: Используйте более специфичные селекторы или CSS-переменные.</p>
                    <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
{`/* Конфликт с Bootstrap */
.btn { background: red; }

/* Решение */
.custom-btn.btn { background: red; }`}
                    </pre>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">10. Полезные инструменты</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>CSS Specificity Calculator - для проверки специфичности селекторов</li>
                <li>Browser DevTools - для инспектирования примененных стилей</li>
                <li>CSS Linters - для выявления проблем со специфичностью</li>
                <li>CSS Preprocessors (SASS/SCSS) - для лучшей организации стилей</li>
            </ul>
        </section>
    </div>
);