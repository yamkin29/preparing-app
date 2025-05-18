import {Section} from "@/types/types";
import {HtmlBasics} from "@/components/HtmlBasics";

export const sections: Section[] = [
    {
        id: 'html',
        title: 'HTML',
        topics: [
            {
                id: 'html-basics',
                label: 'Основы HTML',
                content: HtmlBasics
            },
            /*{
                id: 'html-semantics',
                label: 'Семантическая верстка',
                content: 'Семантическая верстка - это подход к написанию HTML, который делает акцент на значении содержимого...'
            }*/
        ]
    },
    /*{
        id: 'css',
        title: 'CSS',
        topics: [
            {
                id: 'css-basics',
                label: 'Основы CSS',
                content: 'CSS (Cascading Style Sheets) - это язык стилей, который используется для описания внешнего вида документа...'
            },
            {
                id: 'css-flexbox',
                label: 'Flexbox',
                content: 'Flexbox - это одномерный метод компоновки, который позволяет располагать элементы в строке или столбце...'
            }
        ]
    }*/
];