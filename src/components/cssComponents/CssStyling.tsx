import React from 'react';

export const CssStyling: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Цвета в CSS</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Способы задания цветов</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600 text-sm mb-2">Именованные цвета:</p>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-red-500 mr-2"></div>
                                    <code className="bg-gray-100 px-1 rounded">red</code>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-500 mr-2"></div>
                                    <code className="bg-gray-100 px-1 rounded">blue</code>
                                </div>
                            </div>
                            <div className="mt-2 p-2 bg-gray-100 rounded">
                                <pre className="text-sm">
{`/* CSS */
.element {
    color: red;
    background-color: blue;
}

/* Tailwind */
<div className="text-red-500 bg-blue-500">`}
                                </pre>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm mb-2">HEX и RGB:</p>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-[#FF0000] mr-2"></div>
                                    <code className="bg-gray-100 px-1 rounded">#FF0000</code>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-[rgb(0,0,255)] mr-2"></div>
                                    <code className="bg-gray-100 px-1 rounded">rgb(0,0,255)</code>
                                </div>
                            </div>
                            <div className="mt-2 p-2 bg-gray-100 rounded">
                                <pre className="text-sm">
{`/* CSS */
.element {
    color: #FF0000;
    background-color: rgb(0, 0, 255);
}

/* Tailwind */
<div className="text-[#FF0000] bg-[rgb(0,0,255)]">`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Значения и единицы измерения</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Абсолютные единицы</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 mx-auto mb-2"></div>
                            <code className="bg-gray-100 px-1 rounded">px</code>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-500 mx-auto mb-2"></div>
                            <code className="bg-gray-100 px-1 rounded">pt</code>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-500 mx-auto mb-2"></div>
                            <code className="bg-gray-100 px-1 rounded">cm</code>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-500 mx-auto mb-2"></div>
                            <code className="bg-gray-100 px-1 rounded">in</code>
                        </div>
                    </div>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
.element {
    width: 16px;      /* пиксели */
    height: 12pt;     /* пункты */
    margin: 1cm;      /* сантиметры */
    padding: 0.5in;   /* дюймы */
}

/* Tailwind */
<div className="w-4 h-3 m-4 p-2">`}
                        </pre>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Относительные единицы</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 mx-auto mb-2"></div>
                            <code className="bg-gray-100 px-1 rounded">%</code>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-500 mx-auto mb-2"></div>
                            <code className="bg-gray-100 px-1 rounded">em</code>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-500 mx-auto mb-2"></div>
                            <code className="bg-gray-100 px-1 rounded">rem</code>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-500 mx-auto mb-2"></div>
                            <code className="bg-gray-100 px-1 rounded">vh/vw</code>
                        </div>
                    </div>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
.element {
    width: 50%;       /* процент от родителя */
    font-size: 1.5em; /* относительно размера шрифта родителя */
    padding: 1rem;    /* относительно размера шрифта корневого элемента */
    height: 100vh;    /* высота в процентах от высоты viewport */
}

/* Tailwind */
<div className="w-1/2 text-lg p-4 h-screen">`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Фоны и границы</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Фоны</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600 text-sm mb-2">Сплошной цвет:</p>
                            <div className="h-20 bg-blue-500 rounded"></div>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm mb-2">Градиент:</p>
                            <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                        </div>
                    </div>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
.element {
    background-color: #3B82F6;  /* сплошной цвет */
    background: linear-gradient(to right, #3B82F6, #8B5CF6);  /* градиент */
}

/* Tailwind */
<div className="bg-blue-500 bg-gradient-to-r from-blue-500 to-purple-500">`}
                        </pre>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Границы</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <p className="text-gray-600 text-sm mb-2">Сплошная:</p>
                            <div className="h-20 border-4 border-blue-500 rounded"></div>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm mb-2">Пунктирная:</p>
                            <div className="h-20 border-4 border-dashed border-green-500 rounded"></div>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm mb-2">Точечная:</p>
                            <div className="h-20 border-4 border-dotted border-red-500 rounded"></div>
                        </div>
                    </div>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
.element {
    border: 4px solid #3B82F6;      /* сплошная */
    border: 4px dashed #22C55E;     /* пунктирная */
    border: 4px dotted #EF4444;     /* точечная */
    border-radius: 0.25rem;         /* скругление */
}

/* Tailwind */
<div className="border-4 border-blue-500 rounded">
<div className="border-4 border-dashed border-green-500 rounded">
<div className="border-4 border-dotted border-red-500 rounded">`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Работа с текстом</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Шрифты</h5>
                    <div className="space-y-4">
                        <div>
                            <p className="text-gray-600 text-sm mb-2">Размер и вес:</p>
                            <div className="space-y-2">
                                <p className="text-2xl font-bold">Большой жирный текст</p>
                                <p className="text-sm font-light">Маленький тонкий текст</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm mb-2">Стиль и декорации:</p>
                            <div className="space-y-2">
                                <p className="italic">Курсивный текст</p>
                                <p className="underline">Подчеркнутый текст</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
.element {
    font-size: 1.5rem;      /* размер */
    font-weight: 700;       /* жирность */
    font-style: italic;     /* курсив */
    text-decoration: underline;  /* подчеркивание */
}

/* Tailwind */
<div className="text-2xl font-bold">Большой жирный текст</div>
<div className="text-sm font-light">Маленький тонкий текст</div>
<div className="italic">Курсивный текст</div>
<div className="underline">Подчеркнутый текст</div>`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">5. Размеры элементов</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Фиксированные размеры</h5>
                    <div className="space-y-4">
                        <div className="w-40 h-20 bg-blue-500"></div>
                        <div className="w-1/2 h-32 bg-green-500"></div>
                    </div>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
.element {
    width: 10rem;     /* фиксированная ширина */
    height: 5rem;     /* фиксированная высота */
    width: 50%;       /* процент от родителя */
    height: 8rem;     /* фиксированная высота */
}

/* Tailwind */
<div className="w-40 h-20">  /* 10rem x 5rem */
<div className="w-1/2 h-32"> /* 50% x 8rem */`}
                        </pre>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Адаптивные размеры</h5>
                    <div className="space-y-4">
                        <div className="w-full h-20 bg-yellow-500"></div>
                        <div className="w-screen h-32 bg-red-500"></div>
                    </div>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
.element {
    width: 100%;      /* на всю ширину родителя */
    height: 5rem;     /* фиксированная высота */
    width: 100vw;     /* на всю ширину viewport */
    height: 8rem;     /* фиксированная высота */
}

/* Tailwind */
<div className="w-full h-20">   /* 100% x 5rem */
<div className="w-screen h-32"> /* 100vw x 8rem */`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">6. Отступы</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Margin</h5>
                    <div className="space-y-4">
                        <div className="bg-blue-500 p-4 m-4">Внешний отступ 1rem</div>
                        <div className="bg-green-500 p-4 mx-8 my-2">Разные отступы</div>
                    </div>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
.element {
    margin: 1rem;           /* все стороны */
    margin: 2rem 1rem;      /* вертикально горизонтально */
    margin-left: 2rem;      /* слева */
    margin-right: 2rem;     /* справа */
    margin-top: 0.5rem;     /* сверху */
    margin-bottom: 0.5rem;  /* снизу */
}

/* Tailwind */
<div className="m-4">      /* margin: 1rem */
<div className="mx-8 my-2"> /* margin: 0.5rem 2rem */`}
                        </pre>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Padding</h5>
                    <div className="space-y-4">
                        <div className="bg-blue-500 p-4">Внутренний отступ 1rem</div>
                        <div className="bg-green-500 px-8 py-2">Разные отступы</div>
                    </div>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
.element {
    padding: 1rem;          /* все стороны */
    padding: 0.5rem 2rem;   /* вертикально горизонтально */
    padding-left: 2rem;     /* слева */
    padding-right: 2rem;    /* справа */
    padding-top: 0.5rem;    /* сверху */
    padding-bottom: 0.5rem; /* снизу */
}

/* Tailwind */
<div className="p-4">      /* padding: 1rem */
<div className="px-8 py-2"> /* padding: 0.5rem 2rem */`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">7. Работа с изображениями</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Размеры и обрезка</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600 text-sm mb-2">object-fit: cover</p>
                            <div className="w-40 h-40 bg-gray-200 overflow-hidden">
                                <img src="https://picsum.photos/200" alt="Example" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm mb-2">object-fit: contain</p>
                            <div className="w-40 h-40 bg-gray-200 overflow-hidden">
                                <img src="https://picsum.photos/200" alt="Example" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
.image-container {
    width: 10rem;
    height: 10rem;
    overflow: hidden;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;    /* заполняет контейнер с обрезкой */
    object-fit: contain;  /* помещается целиком */
}

/* Tailwind */
<div className="w-40 h-40 overflow-hidden">
    <img className="w-full h-full object-cover" />
    <img className="w-full h-full object-contain" />
</div>`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">8. z-index и overflow</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">z-index</h5>
                    <div className="relative h-32">
                        <div className="absolute top-0 left-0 w-20 h-20 bg-red-500 z-10">z-index: 10</div>
                        <div className="absolute top-4 left-4 w-20 h-20 bg-blue-500 z-20">z-index: 20</div>
                        <div className="absolute top-8 left-8 w-20 h-20 bg-green-500 z-30">z-index: 30</div>
                    </div>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
.container {
    position: relative;
}

.element {
    position: absolute;
    z-index: 10;  /* порядок наложения */
}

/* Tailwind */
<div className="relative">
    <div className="absolute z-10">z-index: 10</div>
    <div className="absolute z-20">z-index: 20</div>
    <div className="absolute z-30">z-index: 30</div>
</div>`}
                        </pre>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">overflow</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <p className="text-gray-600 text-sm mb-2">visible (по умолчанию)</p>
                            <div className="h-20 w-40 bg-blue-100 overflow-visible">
                                <div className="w-60 h-10 bg-blue-500 text-white">Текст выходит за пределы</div>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm mb-2">hidden</p>
                            <div className="h-20 w-40 bg-green-100 overflow-hidden">
                                <div className="w-60 h-10 bg-green-500 text-white">Текст обрезается</div>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm mb-2">scroll</p>
                            <div className="h-20 w-40 bg-yellow-100 overflow-scroll">
                                <div className="w-60 h-10 bg-yellow-500 text-white">Появляется прокрутка</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
.container {
    overflow: visible;  /* контент виден за пределами */
    overflow: hidden;   /* контент обрезается */
    overflow: scroll;   /* появляется прокрутка */
}

/* Tailwind */
<div className="overflow-visible">
<div className="overflow-hidden">
<div className="overflow-scroll">`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">9. Лучшие практики</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Рекомендации</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Используйте относительные единицы измерения для адаптивности</li>
                        <li>Применяйте box-sizing: border-box для предсказуемых размеров</li>
                        <li>Используйте CSS-переменные для цветов и размеров</li>
                        <li>Оптимизируйте изображения перед использованием</li>
                        <li>Следите за контрастностью текста</li>
                    </ul>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
:root {
    --primary-color: #3B82F6;
    --text-size: 1rem;
}

* {
    box-sizing: border-box;
}

.element {
    font-size: var(--text-size);
    color: var(--primary-color);
}

/* Tailwind */
/* Используйте конфигурацию tailwind.config.js для определения тем и размеров */`}
                        </pre>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Распространенные ошибки</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Использование фиксированных размеров без необходимости</li>
                        <li>Неоптимизированные изображения</li>
                        <li>Излишнее использование z-index</li>
                        <li>Игнорирование overflow при работе с контентом</li>
                        <li>Неправильное использование margin и padding</li>
                    </ul>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* Плохо */
.element {
    width: 1000px;  /* фиксированная ширина */
    z-index: 9999;  /* слишком большой z-index */
    margin: 20px;   /* смешивание единиц измерения */
}

/* Хорошо */
.element {
    width: 100%;    /* относительная ширина */
    max-width: 1000px;
    z-index: 10;    /* минимальный необходимый z-index */
    margin: 1rem;   /* консистентные единицы измерения */
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    </div>
); 