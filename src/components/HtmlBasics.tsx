import React from 'react';

export const HtmlBasics: React.FC = () => (
    <>
        <h4>Что такое HTML?</h4>
        <p>HTML (HyperText Markup Language) — это стандартный язык разметки для …</p>
        <ul>
            <li>Тег — это …</li>
            <li>Атрибут — это …</li>
        </ul>
        <pre>
      {`<div className="container">Пример блока</div>`}
    </pre>
    </>
);