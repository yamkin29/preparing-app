import React from 'react';

export const CssPositioning: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Что такое позиционирование в CSS?</h4>
            <p className="text-gray-600 leading-relaxed">
                Позиционирование в CSS позволяет контролировать расположение элементов на странице.
                Свойство position определяет, как элемент будет позиционироваться относительно других элементов
                и как он будет взаимодействовать с потоком документа.
            </p>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Типы позиционирования</h4>
            <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">static (по умолчанию)</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Элемент следует нормальному потоку документа. Свойства top, right, bottom, left и z-index не применяются.
                    </p>
                    <div className="relative border-2 border-dashed border-gray-300 p-4 h-32">
                        <div className="bg-blue-500 text-white p-2 inline-block">Static</div>
                        <div className="bg-blue-500 text-white p-2 inline-block">Static</div>
                        <div className="bg-blue-500 text-white p-2 inline-block">Static</div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">relative</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Элемент позиционируется относительно своего нормального положения. Можно использовать top, right, bottom, left.
                    </p>
                    <div className="relative border-2 border-dashed border-gray-300 p-4 h-32">
                        <div className="bg-blue-500 text-white p-2 inline-block">Static</div>
                        <div className="bg-green-500 text-white p-2 inline-block relative top-4 left-4">Relative</div>
                        <div className="bg-blue-500 text-white p-2 inline-block">Static</div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">absolute</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Элемент удаляется из нормального потока и позиционируется относительно ближайшего позиционированного предка.
                    </p>
                    <div className="relative border-2 border-dashed border-gray-300 p-4 h-32">
                        <div className="bg-blue-500 text-white p-2 inline-block">Static</div>
                        <div className="bg-red-500 text-white p-2 inline-block absolute top-4 right-4">Absolute</div>
                        <div className="bg-blue-500 text-white p-2 inline-block">Static</div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">fixed</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Элемент удаляется из нормального потока и позиционируется относительно окна браузера.
                    </p>
                    <div className="relative border-2 border-dashed border-gray-300 p-4 h-32">
                        <div className="bg-blue-500 text-white p-2 inline-block">Static</div>
                        <div className="bg-purple-500 text-white p-2 inline-block fixed bottom-4 right-4">Fixed</div>
                        <div className="bg-blue-500 text-white p-2 inline-block">Static</div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">sticky</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Элемент ведет себя как relative, пока не достигнет указанной точки прокрутки, затем становится fixed.
                    </p>
                    <div className="relative border-2 border-dashed border-gray-300 p-4 h-32 overflow-auto">
                        <div className="bg-blue-500 text-white p-2 inline-block">Static</div>
                        <div className="bg-yellow-500 text-white p-2 inline-block sticky top-0">Sticky</div>
                        <div className="bg-blue-500 text-white p-2 inline-block">Static</div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Свойства позиционирования</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">top, right, bottom, left</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Эти свойства определяют смещение элемента от соответствующих краев его контейнера.
                    </p>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`.positioned {
    position: relative;
    top: 20px;
    left: 20px;
}`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">z-index</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Определяет порядок наложения элементов. Элементы с большим значением z-index отображаются поверх элементов с меньшим значением.
                    </p>
                    <div className="relative h-32">
                        <div className="absolute top-0 left-0 w-20 h-20 bg-red-500 z-10">z-index: 10</div>
                        <div className="absolute top-4 left-4 w-20 h-20 bg-blue-500 z-20">z-index: 20</div>
                        <div className="absolute top-8 left-8 w-20 h-20 bg-green-500 z-30">z-index: 30</div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Box Model и box-sizing</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">box-sizing: content-box (по умолчанию)</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Ширина и высота элемента включают только содержимое, padding и border добавляются к указанным размерам.
                    </p>
                    <div className="w-40 h-20 bg-blue-500 p-4 border-4 border-red-500">
                        Content Box
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">box-sizing: border-box</h5>
                    <p className="text-gray-600 text-sm mb-2">
                        Ширина и высота элемента включают padding и border, но не margin.
                    </p>
                    <div className="w-40 h-20 bg-blue-500 p-4 border-4 border-red-500 box-border">
                        Border Box
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">5. Практические примеры</h4>
            <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 1: Фиксированное меню</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 2: Модальное окно</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;
}`}
                    </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Пример 3: Всплывающая подсказка</h5>
                    <pre className="bg-gray-100 p-2 rounded text-sm">
{`.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip-content {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 100;
}`}
                    </pre>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">6. Лучшие практики</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Рекомендации</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Используйте position: relative для создания контекста позиционирования</li>
                        <li>Применяйте box-sizing: border-box для более предсказуемых размеров</li>
                        <li>Используйте z-index только когда это действительно необходимо</li>
                        <li>Избегайте чрезмерного использования position: absolute</li>
                        <li>Учитывайте влияние позиционирования на доступность</li>
                    </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Распространенные ошибки</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Забывают установить position: relative для родителя при использовании position: absolute</li>
                        <li>Используют position: fixed без учета мобильных устройств</li>
                        <li>Не учитывают влияние z-index на другие элементы</li>
                        <li>Игнорируют box-sizing при работе с размерами</li>
                        <li>Создают слишком много слоев с z-index</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">7. Поддержка браузерами</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-4">
                    Все современные браузеры поддерживают все типы позиционирования и свойства box-sizing.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                        <div className="font-medium">Chrome</div>
                        <div className="text-green-600">✓ Поддерживает</div>
                    </div>
                    <div className="text-center">
                        <div className="font-medium">Firefox</div>
                        <div className="text-green-600">✓ Поддерживает</div>
                    </div>
                    <div className="text-center">
                        <div className="font-medium">Safari</div>
                        <div className="text-green-600">✓ Поддерживает</div>
                    </div>
                    <div className="text-center">
                        <div className="font-medium">Edge</div>
                        <div className="text-green-600">✓ Поддерживает</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
); 