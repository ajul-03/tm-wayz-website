import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TeamList from './components/TeamList';
import Footer from './components/Footer';
import IntroSequence from './components/IntroSequence';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="App">
      {showIntro && <IntroSequence onComplete={() => setShowIntro(false)} />}
      <Header />
      <Hero />
      <About />
      <TeamList />
      <Footer />
    </div>
  );
}

export default App;
