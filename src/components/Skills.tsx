import React, { useEffect, useState } from 'react';

const Skills: React.FC = () => {
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

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="skills"
      className={`p-8 text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <h2 className="text-3xl font-bold mb-8">Minhas Habilidades</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold">HTML5</h3>
        </div>
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold">CSS</h3>
        </div>
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold">JavaScript</h3>
        </div>
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold">React</h3>
        </div>
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold">Node.js</h3>
        </div>
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold">API</h3>
        </div>
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold">Java</h3>
        </div>
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold">Git/Git Actions</h3>
        </div>
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold">Python</h3>
        </div>
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold">Microsoft Office</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
