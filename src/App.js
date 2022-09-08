import React, {useState, useEffect} from 'react';
import './App.css';
import Preloader from './sections/Preloader';
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
  const [active, setActive] = useState(false)
  
  useEffect(() => {
    function setPreloaderState(){
      setActive(!active)
      console.log('mallam')
    }

    const preLoaderState = setTimeout(setPreloaderState, 2500);


  return () => {
    clearTimeout(preLoaderState)
  }
}, [])

  return (
    <>
      {active ? null : <Preloader displayNone="true" />}
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
    </>
  );
}

export default App;