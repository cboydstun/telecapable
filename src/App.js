import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar'
import Carousel from './components/Carousel/Carousel'
import About from './components/About/About'
import ServicesSections from './components/Services/Services';
import CalloutSection from './components/Callout/Callout'
// import PortfolioSection from './components/Portfolio/Portfolio'
import CallToAction from './components/CallToAction/CallToAction'
import MapSection from './components/Map/MapSection'
import FooterSection from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <About />
      <ServicesSections />
      <CalloutSection />
      {/* <PortfolioSection /> */}
      <CallToAction />
      <MapSection />
      <FooterSection />
      <ScrollToTop />
    </div>
  );
}

export default App;