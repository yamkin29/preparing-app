import React from 'react';

export const CssPreprocessors: React.FC = () => (
    <div className="space-y-8">
        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">1. Введение в Sass/SCSS</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Что такое Sass?</h5>
                    <p className="text-gray-600 mb-4">
                        Sass (Syntactically Awesome Style Sheets) - это препроцессор CSS, который добавляет мощные возможности 
                        для написания более эффективных и поддерживаемых стилей. Он полностью совместим со всеми версиями CSS.
                    </p>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* Преимущества Sass */
1. Полная совместимость с CSS
2. Богатая функциональность
3. Большой опыт разработки (более 8 лет)
4. Поддержка индустрией
5. Большое сообщество разработчиков
6. Множество фреймворков (Compass, Bourbon, Susy)`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">2. Установка и настройка</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Способы установки Sass</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* 1. Установка через npm */
npm install -g sass

/* 2. Проверка установки */
sass --version

/* 3. Компиляция файлов */
sass input.scss output.css

/* 4. Автоматическая компиляция при изменении */
sass --watch input.scss output.css

/* 5. Установка в проект */
npm install sass --save-dev`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">3. Основные возможности</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Ключевые функции Sass</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* 1. Переменные */
$primary-color: #333;
$font-stack: (
    'primary': Arial,
    'secondary': Georgia
);

.element {
    color: $primary-color;
    font-family: map-get($font-stack, 'primary');
}

/* 2. Вложенность */
.navbar {
    background: #fff;
    
    &__item {
        padding: 10px;
        
        &:hover {
            background: #f0f0f0;
        }
    }
}

/* 3. Миксины */
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    @include flex-center;
}

/* 4. Функции */
@function calculate-width($n) {
    @return $n * 100%;
}

.column {
    width: calculate-width(1/3);
}

/* 5. Операции */
$base-size: 16px;
.element {
    font-size: $base-size * 1.5;
    margin: $base-size / 2;
}

/* 6. Управляющие директивы */
@if $theme == 'dark' {
    $background: #000;
    $text: #fff;
} @else {
    $background: #fff;
    $text: #000;
}

/* 7. Циклы */
@for $i from 1 through 3 {
    .item-#{$i} {
        width: 100px * $i;
    }
}

/* 8. Расширение селекторов */
%button-base {
    padding: 10px 20px;
    border-radius: 4px;
}

.primary-button {
    @extend %button-base;
    background: blue;
}

.secondary-button {
    @extend %button-base;
    background: gray;
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">4. Организация кода</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Структура проекта</h5>
                    <div className="space-y-4">
                        <div className="mt-4 p-2 bg-gray-100 rounded">
                            <pre className="text-sm">
{`/* Рекомендуемая структура файлов */
styles/
├── abstracts/
│   ├── _variables.scss
│   ├── _functions.scss
│   └── _mixins.scss
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _utilities.scss
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│   └── _forms.scss
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   └── _grid.scss
└── main.scss

/* Пример импорта в main.scss */
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';
@import 'base/reset';
@import 'base/typography';
@import 'components/buttons';
@import 'layout/header';`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">5. Лучшие практики</h4>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Рекомендации по использованию</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Используйте переменные для повторяющихся значений</li>
                        <li>Создавайте переиспользуемые миксины для общих паттернов</li>
                        <li>Применяйте вложенность умеренно, избегайте глубокой вложенности</li>
                        <li>Используйте функции для сложных вычислений</li>
                        <li>Организуйте код в логические модули</li>
                        <li>Следите за размером скомпилированного CSS</li>
                        <li>Используйте комментарии для документирования сложных частей</li>
                    </ul>
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <pre className="text-sm">
{`/* Пример хорошей организации кода */
// _variables.scss
$colors: (
    'primary': #007bff,
    'secondary': #6c757d,
    'success': #28a745
);

// _mixins.scss
@mixin responsive($breakpoint) {
    @if $breakpoint == 'tablet' {
        @media (min-width: 768px) { @content; }
    }
    @if $breakpoint == 'desktop' {
        @media (min-width: 1024px) { @content; }
    }
}

// Использование
.button {
    background: map-get($colors, 'primary');
    
    @include responsive('tablet') {
        padding: 15px 30px;
    }
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    </div>
); 