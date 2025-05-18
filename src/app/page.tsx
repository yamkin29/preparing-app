'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { ContentArea } from '@/components/ContentArea';

interface Topic {
    id: string;
    label: string;
    content: string;
}

interface Section {
    id: string;
    title: string;
    topics: Topic[];
}

const sections: Section[] = [
    {
        id: 'html',
        title: 'HTML',
        topics: [
            {
                id: 'html-basics',
                label: 'Основы HTML',
                content: 'HTML (HyperText Markup Language) - это стандартный язык разметки для создания веб-страниц...'
            },
            {
                id: 'html-semantics',
                label: 'Семантическая верстка',
                content: 'Семантическая верстка - это подход к написанию HTML, который делает акцент на значении содержимого...'
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
                content: 'CSS (Cascading Style Sheets) - это язык стилей, который используется для описания внешнего вида документа...'
            },
            {
                id: 'css-flexbox',
                label: 'Flexbox',
                content: 'Flexbox - это одномерный метод компоновки, который позволяет располагать элементы в строке или столбце...'
            }
        ]
    }
];

export default function Home() {
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center mb-8">Frontend Developer Learning Path</h1>
                <div className="flex gap-6">
                    <Sidebar
                        sections={sections}
                        onSelect={setSelectedTopic}
                        selected={selectedTopic}
                    />
                    <ContentArea topic={selectedTopic} />
                </div>
            </div>
        </div>
    );
}
