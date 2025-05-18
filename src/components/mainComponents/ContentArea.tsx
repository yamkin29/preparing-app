import React from 'react';
import {Topic} from "@/types/types";

interface ContentAreaProps {
    topic: Topic | null;
}

export function ContentArea({ topic }: ContentAreaProps) {
    if (!topic) {
        return <p>Выберите тему слева, чтобы увидеть детали.</p>;
    }
    const TopicComponent = topic.content;
    return (
        <div className="w-3/4 p-6 bg-white shadow rounded">
            <h3 className="text-2xl font-bold mb-4">{topic.label}</h3>
            <div className="prose">
                <TopicComponent />
            </div>
        </div>
    );
}