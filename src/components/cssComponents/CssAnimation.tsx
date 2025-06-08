import React from 'react';

export const CssAnimation: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Основы CSS анимаций</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Что такое CSS анимации?</h5>
                    <p className="text-gray-600 mb-4">
                        CSS анимации позволяют создавать плавные переходы между состояниями элементов. Они могут быть реализованы с помощью свойств transition и animation.
                    </p>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* Два основных способа создания анимаций в CSS */
1. Transition - для простых переходов между состояниями
2. Animation - для более сложных анимаций с ключевыми кадрами`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Transition</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Свойства transition</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* CSS */
.element {
    /* Базовые стили */
    background-color: blue;
    width: 100px;
    height: 100px;
    
    /* Свойства transition */
    transition-property: all;           /* какие свойства анимировать */
    transition-duration: 0.3s;          /* длительность анимации */
    transition-timing-function: ease;   /* функция плавности */
    transition-delay: 0s;               /* задержка перед началом */
    
    /* Сокращенная запись */
    transition: all 0.3s ease 0s;
}

/* Примеры различных timing functions */
.element {
    transition-timing-function: linear;      /* равномерная скорость */
    transition-timing-function: ease;        /* плавное начало и конец */
    transition-timing-function: ease-in;     /* плавное начало */
    transition-timing-function: ease-out;    /* плавный конец */
    transition-timing-function: ease-in-out; /* плавное начало и конец */
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); /* пользовательская функция */
}

/* Tailwind */
<div className="transition-all duration-300 ease-in-out">
    Анимируемый элемент
</div>`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Animation</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Свойства animation</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* CSS */
@keyframes slide {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(100px);
    }
    100% {
        transform: translateX(0);
    }
}

.element {
    /* Свойства animation */
    animation-name: slide;              /* имя анимации */
    animation-duration: 2s;             /* длительность */
    animation-timing-function: ease;    /* функция плавности */
    animation-delay: 0s;                /* задержка */
    animation-iteration-count: infinite; /* количество повторений */
    animation-direction: normal;        /* направление */
    animation-fill-mode: forwards;      /* состояние после анимации */
    animation-play-state: running;      /* состояние воспроизведения */
    
    /* Сокращенная запись */
    animation: slide 2s ease 0s infinite normal forwards running;
}

/* Tailwind */
<div className="animate-slide">
    Анимируемый элемент
</div>`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Трансформации (Transform)</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Основы трансформаций</h5>
                    <p className="text-gray-600 mb-4">
                        Свойство transform позволяет изменять форму, размер и положение элемента в 2D и 3D пространстве. 
                        Трансформации создают новую систему координат для элемента, не влияя на расположение других элементов.
                    </p>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
/* Базовый синтаксис */
.element {
    transform: функция(значение);
}

/* Комбинирование трансформаций */
.element {
    transform: функция1(значение1) функция2(значение2);
}`}
                        </pre>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">2D Трансформации</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* CSS */
/* Перемещение (translate) */
.element {
    /* Перемещение по X и Y */
    transform: translate(100px, 50px);
    
    /* Перемещение только по X */
    transform: translateX(100px);
    
    /* Перемещение только по Y */
    transform: translateY(50px);
    
    /* Перемещение в процентах */
    transform: translate(50%, 50%);
}

/* Масштабирование (scale) */
.element {
    /* Масштабирование по X и Y */
    transform: scale(1.5);        /* увеличить в 1.5 раза */
    transform: scale(0.5);        /* уменьшить в 2 раза */
    
    /* Масштабирование по X */
    transform: scaleX(1.5);
    
    /* Масштабирование по Y */
    transform: scaleY(0.5);
    
    /* Разное масштабирование по осям */
    transform: scale(1.5, 0.5);
}

/* Поворот (rotate) */
.element {
    /* Поворот на угол */
    transform: rotate(45deg);     /* поворот на 45 градусов */
    transform: rotate(1turn);     /* полный оборот */
    transform: rotate(0.5turn);   /* пол-оборота */
}

/* Наклон (skew) */
.element {
    /* Наклон по X и Y */
    transform: skew(20deg, 10deg);
    
    /* Наклон только по X */
    transform: skewX(20deg);
    
    /* Наклон только по Y */
    transform: skewY(10deg);
}

/* Точка трансформации */
.element {
    /* Изменение точки трансформации */
    transform-origin: center center;    /* центр элемента */
    transform-origin: top left;         /* верхний левый угол */
    transform-origin: 50% 50%;          /* центр (в процентах) */
    transform-origin: 100px 100px;      /* конкретная точка */
}

/* Tailwind */
<div className="transform translate-x-24 translate-y-12">Перемещение</div>
<div className="transform scale-150">Масштабирование</div>
<div className="transform rotate-45">Поворот</div>
<div className="transform skew-x-12">Наклон</div>
<div className="transform origin-center">Центр трансформации</div>`}
                            </pre>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">3D Трансформации</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* CSS */
/* Включение 3D-пространства */
.container {
    perspective: 1000px;          /* глубина 3D-пространства */
    transform-style: preserve-3d;  /* сохранение 3D-эффектов */
}

/* 3D Перемещение */
.element {
    transform: translateZ(100px);  /* перемещение по оси Z */
    transform: translate3d(100px, 50px, 100px); /* перемещение по всем осям */
}

/* 3D Поворот */
.element {
    transform: rotateX(45deg);     /* поворот вокруг оси X */
    transform: rotateY(45deg);     /* поворот вокруг оси Y */
    transform: rotateZ(45deg);     /* поворот вокруг оси Z */
    transform: rotate3d(1, 1, 1, 45deg); /* поворот вокруг произвольной оси */
}

/* Масштабирование по Z */
.element {
    transform: scaleZ(1.5);        /* масштабирование по оси Z */
    transform: scale3d(1.5, 1.5, 1.5); /* масштабирование по всем осям */
}

/* Tailwind */
<div className="perspective-1000">
    <div className="transform-gpu translate-z-24 rotate-x-45">
        3D элемент
    </div>
</div>`}
                            </pre>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Практические примеры трансформаций</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* CSS */
/* Карточка с эффектом наведения */
.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-10px) scale(1.02);
}

/* Кнопка с эффектом нажатия */
.button {
    transition: transform 0.1s ease;
}

.button:active {
    transform: scale(0.95);
}

/* Меню с анимацией появления */
.menu {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
}

.menu.active {
    transform: translateX(0);
}

/* 3D карточка */
.card-3d {
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
}

.card-3d:hover {
    transform: rotateY(180deg);
}

/* Tailwind */
<div className="transition-transform duration-300 hover:translate-y-[-10px] hover:scale-102">
    Карточка с эффектом
</div>

<button className="transition-transform duration-100 active:scale-95">
    Кнопка с эффектом
</button>

<div className="transform -translate-x-full transition-transform duration-300 active:translate-x-0">
    Меню
</div>

<div className="transform-gpu transition-transform duration-500 hover:rotate-y-180">
    3D карточка
</div>`}
                            </pre>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Оптимизация производительности</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* CSS */
/* Аппаратное ускорение */
.element {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
    will-change: transform;
}

/* Оптимизация анимаций */
.element {
    /* Используйте transform вместо margin/position */
    transform: translateX(100px); /* вместо margin-left: 100px */
    
    /* Комбинируйте трансформации */
    transform: translate(100px, 50px) scale(1.5); /* вместо нескольких свойств */
}

/* Tailwind */
<div className="transform-gpu will-change-transform">
    Оптимизированный элемент
</div>`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">5. Практические примеры</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Часто используемые анимации</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* CSS */
/* Пульсация */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.pulse {
    animation: pulse 2s infinite;
}

/* Появление */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in {
    animation: fadeIn 0.5s ease-in;
}

/* Вращение */
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spin {
    animation: spin 1s linear infinite;
}

/* Tailwind */
<div className="animate-pulse">Пульсирующий элемент</div>
<div className="animate-fade-in">Появляющийся элемент</div>
<div className="animate-spin">Вращающийся элемент</div>`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">6. Лучшие практики</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Рекомендации по использованию анимаций</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Используйте анимации умеренно и с целью</li>
                        <li>Учитывайте производительность (анимируйте только opacity и transform)</li>
                        <li>Предоставляйте возможность отключения анимаций</li>
                        <li>Следите за доступностью (не используйте мерцающие анимации)</li>
                        <li>Тестируйте на разных устройствах</li>
                        <li>Используйте will-change для оптимизации производительности</li>
                    </ul>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* CSS */
/* Оптимизация производительности */
.element {
    will-change: transform, opacity;
    transform: translateZ(0);
    backface-visibility: hidden;
}

/* Отключение анимаций */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}

/* Tailwind */
<div className="will-change-transform transform-gpu">
    Оптимизированный элемент
</div>`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    </div>
); 