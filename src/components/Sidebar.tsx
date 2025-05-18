// components/Sidebar.js
import React from 'react';

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

interface SidebarProps {
    sections: Section[];
    onSelect: (topic: Topic) => void;
    selected: Topic | null;
}

export function Sidebar({ sections, onSelect, selected }: SidebarProps) {
    return (
        <div className="w-1/4 p-4 space-y-6 bg-gray-50">
            {sections.map(section => (
                <div key={section.id}>
                    <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                    <div className="flex flex-wrap gap-2">
                        {section.topics.map(topic => (
                            <button
                                key={topic.id}
                                onClick={() => onSelect(topic)}
                                className={
                                    `px-3 py-1 border rounded hover:bg-blue-100 focus:outline-none ` +
                                    (selected?.id === topic.id
                                        ? 'bg-blue-200 border-blue-400'
                                        : 'bg-white border-gray-300')
                                }
                            >
                                {topic.label}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}