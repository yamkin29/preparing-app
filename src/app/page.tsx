'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { ContentArea } from '@/components/ContentArea';
import {sections} from "@/data/sections";
import {Topic} from "@/types/types";

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
