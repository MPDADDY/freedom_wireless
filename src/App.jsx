import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Welcome from './components/afterhero/Welcome';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Welcome />
    </div>
  )
}

export default App;
