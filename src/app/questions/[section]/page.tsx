import Link from 'next/link';
import { notFound } from 'next/navigation';
import QuestionPanel from '@/components/QuestionPanel';
import { questions } from '@/data/questions';

const sections = {
  'html-css': {
    title: 'HTML и CSS',
    description: 'Вопросы по основам HTML и CSS, верстке и стилизации',
  },
  'javascript': {
    title: 'JavaScript',
    description: 'Вопросы по JavaScript, включая ES6+, DOM, асинхронность',
  },
  'typescript': {
    title: 'TypeScript',
    description: 'Вопросы по TypeScript, типам, интерфейсам и дженерикам',
  },
  'general': {
    title: 'Общие',
    description: 'Общие вопросы по веб-разработке, алгоритмам и структурам данных',
  },
};

export default function SectionPage({ params }: { params: { section: string } }) {
  const section = sections[params.section as keyof typeof sections];
  const sectionQuestions = questions[params.section as keyof typeof questions] || [];

  if (!section) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link 
          href="/questions"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Назад к разделам
        </Link>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{section.title}</h1>
        <p className="text-gray-600">{section.description}</p>
      </div>

      <div className="space-y-4">
        {sectionQuestions.length > 0 ? (
          sectionQuestions.map((q) => (
            <QuestionPanel
              key={q.id}
              question={q.question}
              answer={q.answer}
            />
          ))
        ) : (
          <p className="text-gray-500 italic">
            Вопросы для этого раздела будут добавлены позже
          </p>
        )}
      </div>
    </div>
  );
} 