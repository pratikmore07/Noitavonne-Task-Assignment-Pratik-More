import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Navbar.js';
import Hero from './Hero.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import Section5 from './Section5.js';
import Section6 from './Section6.js';
import Footer from './Footer.js';
import Searchbar from './Searchbar.js';


function App() {
  return (

     <div>
        <Navbar />
        <Searchbar />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      
      </div>
  );
}

export default App;
