import {Section} from "@/types/types";
import {HtmlBasics} from "@/components/htmlComponents/HtmlBasics";
import {HtmlSemantics} from "@/components/htmlComponents/HtmlSemantics";
import {HtmlAccessibility} from "@/components/htmlComponents/HtmlAccessibility";
import {SeoBasics} from "@/components/htmlComponents/SeoBasics";
import {CssBasics} from "@/components/cssComponents/CssBasics";
import {CssIntegration} from "@/components/cssComponents/CssIntegration";

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
            {
                id: 'html-semantics',
                label: 'Семантическая верстка',
                content: HtmlSemantics
            },
            {
                id: 'html-accessibility',
                label: 'Семантическая верстка',
                content: HtmlAccessibility
            },
            {
                id: 'html-ceo',
                label: 'CEO',
                content: SeoBasics
            }
        ]
    },
    {
        id: 'css',
        title: 'CSS',
        topics: [
            {
                id: 'css-basics',
                label: 'Основы CSS',
                content: CssBasics
            },
            {
                id: 'css-integration',
                label: 'Подключение CSS',
                content: CssIntegration
            }
        ]
    }
];