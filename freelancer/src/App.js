import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';

const App = () => {
  return(
    <>
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Services />
        </main>
      </>
  )
}

export default App
