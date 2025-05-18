import {Section} from "@/types/types";
import {HtmlBasics} from "@/components/htmlComponents/HtmlBasics";
import {HtmlSemantics} from "@/components/htmlComponents/HtmlSemantics";
import {HtmlAccessibility} from "@/components/htmlComponents/HtmlAccessibility";
import {SeoBasics} from "@/components/htmlComponents/SeoBasics";
import {CssBasics} from "@/components/cssComponents/CssBasics";
import {CssIntegration} from "@/components/cssComponents/CssIntegration";
import {CssCascadeSpecificity} from "@/components/cssComponents/CssCascadeSpecificity";
import {BemMethodology} from "@/components/cssComponents/BemMethodology";
import {CssPseudoClassesElements} from "@/components/cssComponents/CssPseudoClassesElements";
import {CssFlexbox} from "@/components/cssComponents/CssFlexbox";
import {CssGrid} from "@/components/cssComponents/CssGrid";
import {CssPositioning} from "@/components/cssComponents/CssPositioning";
import {CssStyling} from "@/components/cssComponents/CssStyling";

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
            },
            {
                id: 'css-cascade',
                label: 'Каскадность и приоритеты селекторов',
                content: CssCascadeSpecificity
            },
            {
                id: 'css-bem',
                label: 'Методология БЭМ',
                content: BemMethodology
            },
            {
                id: 'css-pseudo',
                label: 'Псевдоклассы и псевдоэлементы',
                content: CssPseudoClassesElements
            },
            {
                id: 'css-flexbox',
                label: 'Flexbox',
                content: CssFlexbox
            },
            {
                id: 'css-grid',
                label: 'CSS Grid',
                content: CssGrid
            },
            {
                id: 'css-positioning',
                label: 'Позиционирование элементов',
                content: CssPositioning
            },
            {
                id: 'css-styling',
                label: 'Стилизация элементов',
                content: CssStyling
            }
        ]
    }
];