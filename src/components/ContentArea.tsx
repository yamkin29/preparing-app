import React from 'react';

interface Topic {
    id: string;
    label: string;
    content: string;
}

interface ContentAreaProps {
    topic: Topic | null;
}

export function ContentArea({ topic }: ContentAreaProps) {
    return (
        <div className="w-3/4 p-6 bg-white shadow rounded">
            {topic ? (
                <>
                    <h3 className="text-2xl font-bold mb-4">{topic.label}</h3>
                    <div className="prose">
                        {topic.content}
                    </div>
                </>
            ) : (
                <p>Выберите тему слева, чтобы увидеть детали.</p>
            )}
        </div>
    );
}