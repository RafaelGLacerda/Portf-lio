import React, { useEffect, useState } from 'react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="projects"
      className={`p-8 bg-white text-white text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <h2 className="text-3xl font-bold mb-8">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* StoreProject */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-100">StoreProject</h3>
          <p className="text-gray-100">Aplicação de e-commerce que permite aos usuários navegar e comprar produtos com uma interface simples e intuitiva.</p>
          <div className="mt-4">
            <a href="https://github.com/RafaelGLacerda/StoreProject" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Ver no GitHub</a> | 
            <a href="https://rafaelglacerda.github.io/StoreProject/" className="text-blue-500 hover:text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">WebSite</a>
          </div>
        </div>

        {/* Movies Library */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-100">Movies Library</h3>
          <p className="text-gray-100">Um site bem estilizado para acessar informações de filmes, como duração, orçamento e receita.</p>
          <div className="mt-4">
            <a href="https://github.com/RafaelGLacerda/Movies-Library" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Ver no GitHub</a> | 
            <a href="https://yourmovielibrary.netlify.app/" className="text-blue-500 hover:text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">WebSite</a>
          </div>
        </div>

        {/* Galeria Render */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-100">Galeria Render</h3>
          <p className="text-gray-100">Aplicação que permite upload de imagens, construída com Node.js no back-end.</p>
          <div className="mt-4">
            <a href="https://github.com/RafaelGLacerda/GaleriaRender" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Ver no GitHub</a> |
            <a href="https://galeriarender-qnwf.onrender.com/" className="text-blue-500 hover:text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">WebSite</a>
          </div>
        </div>

        {/* Recicla Salvador */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-100">Recicla Salvador</h3>
          <p className="text-gray-100">Projeto de conscientização e gamificação voltado à sustentabilidade urbana.</p>
          <div className="mt-4">
            <a href="https://github.com/RafaelGLacerda/ReciclaSalvador" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Ver no GitHub</a> |
            <a href="https://reciclasalvador.netlify.app/" className="text-blue-500 hover:text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">WebSite</a>
          </div>
        </div>

        {/* Costs Service */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-100">Costs Service</h3>
          <p className="text-gray-100"> Sistema voltado ao gerenciamento de Serviços e Orçamentos.</p>
          <div className="mt-4">
            <a href="https://github.com/RafaelGLacerda/costs_project" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Ver no GitHub</a> |
            <a href="https://costs-api-i62v.onrender.com" className="text-blue-500 hover:text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">API</a> |
            <a href="https://costs-project.onrender.com" className="text-blue-500 hover:text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">WebSite</a>
          </div>
        </div>

       {/* Tasks */}
       <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-100">Tasks</h3>
          <p className="text-gray-100">Um sistema de gerenciamento de tarefas.</p>
          <div className="mt-4">
            <a href="https://github.com/RafaelGLacerda/Tasks?tab=readme-ov-file" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Ver no GitHub</a> |
            <a href="https://tasks-hbdt.onrender.com/" className="text-blue-500 hover:text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">WebSite</a>
          </div>
        </div>
        
     {/* EasyBuniness */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-100">EasyBuniness</h3>
          <p className="text-gray-100"> Sistema voltado ao gerenciamento de Serviços e Orçamentos.</p>
          <div className="mt-4">
            <a href="https://github.com/RafaelGLacerda/EasyBuniness" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Ver no GitHub</a> |
            <a href="https://easybuniness.onrender.com/" className="text-blue-500 hover:text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">WebSite</a>
          </div>
        </div>
        
       {/* Projeto Reciclagem */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-100">Projeto Reciclagem</h3>
          <p className="text-gray-100"> WebSite que junta usuários e cooperativas.</p>
          <div className="mt-4">
            <a href="https://github.com/RafaelGLacerda/A3" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Ver no GitHub</a> |
            <a href="https://a3-2lsq.onrender.com/" className="text-blue-500 hover:text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">WebSite</a>
          </div>
        </div>

         {/* PythonPixel */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-100">PythonPixel</h3>
          <p className="text-gray-100"> Um Jogo Arcade criado apenas com Python.</p>
          <div className="mt-4">
            <a href="https://github.com/RafaelGLacerda/PixelPython" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Ver no GitHub</a> |
            <a href="https://drive.google.com/file/d/1c8d_SKmGI3toZ5lFKn88lpq3PsaX378E/view" className="text-blue-500 hover:text-blue-700 ml-2" target="_blank" rel="noopener noreferrer">Download</a>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Projects;
