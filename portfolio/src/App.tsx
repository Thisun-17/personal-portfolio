import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Social from './components/Social';
import Email from './components/Email';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 500);
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-navy text-slate min-h-screen font-sans">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar showContent={showContent} />
          <Social showContent={showContent} />
          <Email showContent={showContent} />
          
          <main className="px-6 lg:px-12 xl:px-24 2xl:px-36 max-w-7xl mx-auto">
            <Hero showContent={showContent} />
            <About showContent={showContent} />
            <Experience showContent={showContent} />
            <Projects showContent={showContent} />
            <Contact showContent={showContent} />
            <Footer showContent={showContent} />
          </main>
        </>
      )}
    </div>
  );
}

export default App;