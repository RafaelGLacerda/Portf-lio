import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-end items-center shadow-lg">
      <ul className="flex space-x-6">
        <li>
          <a 
            href="#about" 
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
            Sobre
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
            Projetos
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
