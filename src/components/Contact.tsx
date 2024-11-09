
import React, { useEffect, useState } from 'react';

const Contact: React.FC = () => {
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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="contact"
      className={`p-8 bg-gray-700 text-white text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className="text-3xl font-bold mb-4">Contato</h2>
      <p>Entre em contato comigo através das redes sociais ou envie um email para:</p>
      <p className="text-gray-300">Rafaellacerda2004@gmail.com</p>
      
      <div className="mt-6">
        <a
          href="https://github.com/RafaelGLacerda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition duration-300 mx-4"
        >
          GitHub
        </a>
        <a
          href="https://br.linkedin.com/in/rafael-lacerda-47513526a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition duration-300 mx-4"
        >
          LinkedIn
        </a>
        <a
          href="mailto:Rafaellacerda2004@gmail.com"
          className="text-blue-500 hover:text-blue-700 transition duration-300 mx-4"
        >
          Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
