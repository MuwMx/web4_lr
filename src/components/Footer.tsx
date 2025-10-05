import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Інформація</h3>
        <ul className="space-y-2">
          <li>Куба Олексій Якович</li>
          <li>Група: 309</li>
          <li>Варіант: 11</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Посилання</h3>
        <ul className="space-y-2">
          <li>
            <a 
              href="https://youtu.be/4OIDQqnUO6s?si=OwnQ_XMVPpk9khTX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Figure.09 - Linkin Park
            </a>
          </li>
          <li>
            <a 
              href="https://youtu.be/LpC0SKU6O00?si=HMUccjJbSYigR9-0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Dont Stay - Linkin Park
            </a>
          </li>
          <li>
            <a 
              href="https://youtu.be/oWfGOVWrueo?si=KTNlbiUc6P0KFLSE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Faint - Linkin Park
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Контакти</h3>
        <ul className="space-y-2">
          <li>Email: 22310912@chmnu.edu.ua</li>
          <li>Телефон: +380 XX XXX XX XX</li>
          <li>
            GitHub: 
            <a 
              href="https://github.com/MuwMx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
            >
              github.com/MuwMx
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
      <p>© {new Date().getFullYear()} Куба. Всі права захищені.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;