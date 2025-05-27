export interface Question {
  id: string;
  question: string;
  answer: string;
}

export const questions: Record<string, Question[]> = {
  'html-css': [
    {
      id: 'css-pseudo',
      question: 'CSS псевдоклассы и псевдоэлементы',
      answer: `Псевдоклассы и псевдоэлементы - это специальные селекторы в CSS, которые позволяют стилизовать элементы в определенных состояниях или частях элементов.

Псевдоклассы (Pseudo-classes):
- :hover - применяется при наведении курсора
- :active - применяется при нажатии
- :focus - применяется при фокусе на элементе
- :first-child - выбирает первый дочерний элемент
- :last-child - выбирает последний дочерний элемент
- :nth-child(n) - выбирает n-ный дочерний элемент
- :not(selector) - выбирает элементы, не соответствующие селектору

Пример использования псевдоклассов:
\`\`\`css
.button:hover {
  background-color: #0056b3;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

li:first-child {
  font-weight: bold;
}
\`\`\`

Псевдоэлементы (Pseudo-elements):
- ::before - создает элемент перед содержимым
- ::after - создает элемент после содержимого
- ::first-line - стилизует первую строку текста
- ::first-letter - стилизует первую букву текста
- ::selection - стилизует выделенный текст

Пример использования псевдоэлементов:
\`\`\`css
.quote::before {
  content: '"';
  font-size: 2em;
  color: #666;
}

p::first-letter {
  font-size: 2em;
  float: left;
  margin-right: 0.1em;
}

::selection {
  background-color: #007bff;
  color: white;
}
\`\`\`

Основные различия:
1. Псевдоклассы описывают состояние элемента, а псевдоэлементы создают новые элементы
2. Псевдоклассы используют одно двоеточие (:), а псевдоэлементы - два (::)
3. Псевдоклассы можно комбинировать, а псевдоэлементы нельзя
4. Псевдоэлементы требуют свойства content для отображения (кроме ::first-line и ::first-letter)`
    }
  ],
  'javascript': [],
  'typescript': [],
  'general': []
}; 