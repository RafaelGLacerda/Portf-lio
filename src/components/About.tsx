import React, { useEffect, useState } from 'react';

const About: React.FC = () => {
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

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
    id="about"
    className={`p-8 bg-gray-800 text-white text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
    <p className="text-lg mb-4">
      Sou um desenvolvedor iniciante com grande interesse pela área de tecnologia e programação. 
      Natural de Salvador-BA, estou constantemente aprimorando minhas habilidades em desenvolvimento web e backend. 
      Busco aprender novas ferramentas, frameworks e melhores práticas para criar soluções inovadoras e eficientes. 
      Estou sempre em busca de oportunidades desafiadoras para expandir meu conhecimento e contribuir para projetos impactantes.
    </p>
    <a href="#projects" className="mt-4 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded transition duration-300 transform hover:scale-105">
      Veja meus projetos
    </a>
  </section>
  
  
  );
};

export default About;
