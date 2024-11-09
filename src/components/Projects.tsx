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
      className={`p-8 bg-gray-800 text-white text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <h2 className="text-3xl font-bold mb-8">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Projeto StoreProject */}
        <div className="p-6 bg-gray-400 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-800">StoreProject</h3>
          <p className="text-gray-800">Aplicação de e-commerce que permite aos usuários navegar e comprar produtos com uma interface simples e intuitiva.</p>
          <div className="mt-4">
            <a 
              href="https://github.com/RafaelGLacerda/StoreProject" 
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer">
              Ver no GitHub
            </a> | 
            <a 
              href="https://rafaelglacerda.github.io/StoreProject/" 
              className="text-blue-500 hover:text-blue-700 ml-2"
              target="_blank"
              rel="noopener noreferrer">
              Demo ao vivo
            </a>
          </div>
        </div>
        
        {/* Projeto Random LOL All Champion */}
        <div className="p-6 bg-gray-400 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Random LOL All Champion</h3>
          <p className="text-gray-800">Jogo para escolher um campeão, Runa, Lane e build totalmente aleatórios de League of Legends, permitindo aos jogadores testarem coisas novas.</p>
          <div className="mt-4">
            <a 
              href="https://github.com/RafaelGLacerda/random_lol_all_champion" 
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer">
              Ver no GitHub
            </a> | 
            <a 
              href="https://rafaelglacerda.github.io/random_lol_all_champion/" 
              className="text-blue-500 hover:text-blue-700 ml-2"
              target="_blank"
              rel="noopener noreferrer">
              Demo ao vivo
            </a>
          </div>
        </div>

        {/* Projeto MarioGame */}
        <div className="p-6 bg-gray-400 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-gray-800">MarioGame</h3>
          <p className="text-gray-800">Jogo inspirado no clássico Super Mario, só que com a jogabilidade de um Jump Game.</p>
          <div className="mt-4">
            <a 
              href="https://github.com/RafaelGLacerda/MarioGame" 
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer">
              Ver no GitHub
            </a> | 
            <a 
              href="https://rafaelglacerda.github.io/MarioGame/" 
              className="text-blue-500 hover:text-blue-700 ml-2"
              target="_blank"
              rel="noopener noreferrer">
              Demo ao vivo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
