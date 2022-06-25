import React from 'react';
import './App.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Clients from './sections/Clients';
import About from './sections/About';
import Collection from './sections/Collection';
import Featured from './sections/Featured';
import Creator from './sections/Creator';
import Cta from './sections/Cta';
import Footer from './sections/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main id="main">
        <div className="main-inner">
          <Hero />
          <Clients />
          <About />
          <Collection />
          <Featured />
          <Creator />
          <Cta />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;