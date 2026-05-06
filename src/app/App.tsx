import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');

  return (
    <div className="min-h-screen bg-black">
      {/* Dot Grid Background Pattern */}
      <div 
        className="fixed inset-0 opacity-30" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgb(37, 208, 171) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative z-10">
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
        
        {activeSection === 'Home' && (
          <>
            <Hero />
            <ProjectGrid />
          </>
        )}
        
        {activeSection === 'About' && <AboutPage onSectionChange={setActiveSection} />}
        
        {activeSection === 'Work' && <ProjectGrid />}
        
        <Footer />
      </div>
    </div>
  );
}