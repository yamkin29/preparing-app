'use client';

import { useState } from 'react';

interface QuestionPanelProps {
  question: string;
  answer: string;
}

export default function QuestionPanel({ question, answer }: QuestionPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
      >
        <span className="font-medium">{question}</span>
        <span className="text-gray-500">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white border-t">
          <div className="prose max-w-none">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
} 