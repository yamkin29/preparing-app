'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            <Link 
              href="/" 
              className={`text-lg font-medium hover:text-blue-600 transition-colors ${
                pathname === '/' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link 
              href="/questions" 
              className={`text-lg font-medium hover:text-blue-600 transition-colors ${
                pathname === '/questions' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Вопросы
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
} 