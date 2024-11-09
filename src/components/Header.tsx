import React from 'react';
import perfil from '../assets/perfil.jpg'; // Caminho relativo para a imagem

const Header: React.FC = () => {
  return (
    <header className="h-screen flex flex-col justify-center items-center text-white text-center p-4 animate-backgroundTransition">
      <img
        src={perfil}
        alt="Foto de Perfil"
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h1 className="text-5xl font-bold mb-4">Rafael Lacerda</h1>
      <p className="text-2xl mb-4">Desenvolvedor Iniciante</p>
      <a
        href="#about"
        className="mt-8 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded transition duration-300 transform hover:scale-105"
      >
        Saiba mais sobre mim
      </a>
      <nav className="mt-8">
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className="hover:text-gray-300 transition duration-300"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-300 transition duration-300"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-300 transition duration-300"
            >
              Contato
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-gray-300 transition duration-300"
            >
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
