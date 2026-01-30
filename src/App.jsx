import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TeamList from './components/TeamList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <TeamList />
      <Footer />
    </div>
  );
}

export default App;
