import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';


const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
