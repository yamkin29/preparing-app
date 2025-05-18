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
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Адаптивные размеры</h5>
                    <div className="space-y-4">
                        <div className="w-full h-20 bg-yellow-500"></div>
                        <div className="w-screen h-32 bg-red-500"></div>
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
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Padding</h5>
                    <div className="space-y-4">
                        <div className="bg-blue-500 p-4">Внутренний отступ 1rem</div>
                        <div className="bg-green-500 px-8 py-2">Разные отступы</div>
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
                </div>
            </div>
        </section>
    </div>
); 