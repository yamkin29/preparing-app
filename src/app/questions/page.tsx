import Link from 'next/link';

const sections = [
  {
    id: 'html-css',
    title: 'HTML и CSS',
    description: 'Вопросы по основам HTML и CSS, верстке и стилизации',
    color: 'bg-blue-50 hover:bg-blue-100',
    borderColor: 'border-blue-200',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Вопросы по JavaScript, включая ES6+, DOM, асинхронность',
    color: 'bg-yellow-50 hover:bg-yellow-100',
    borderColor: 'border-yellow-200',
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'Вопросы по TypeScript, типам, интерфейсам и дженерикам',
    color: 'bg-purple-50 hover:bg-purple-100',
    borderColor: 'border-purple-200',
  },
  {
    id: 'general',
    title: 'Общие',
    description: 'Общие вопросы по веб-разработке, алгоритмам и структурам данных',
    color: 'bg-green-50 hover:bg-green-100',
    borderColor: 'border-green-200',
  },
];

export default function QuestionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Вопросы</h1>
      <p className="text-gray-600 mb-8">
        Выберите раздел, чтобы просмотреть вопросы по соответствующей теме
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Link 
            key={section.id}
            href={`/questions/${section.id}`}
            className={`block p-6 rounded-lg border-2 ${section.color} ${section.borderColor} transition-colors duration-200`}
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 