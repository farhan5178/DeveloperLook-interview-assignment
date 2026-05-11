// App.jsx

import { useState } from "react";

import TopBar from "./components/TopBar";
import MainNavbar from "./components/MainNavbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import BrandSection from "./components/BrandSection";
import FeaturedWork from "./components/FeaturedWork";
import ServicesSection from "./components/ServicesSection";
import WhatsNew from "./components/WhatsNew";
import ReadyToRise from "./components/ReadyToRise";
import Footer from "./components/Footer";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
     <TopBar />

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="hero-wrapper">
        <MainNavbar setMenuOpen={setMenuOpen} />
        <Hero menuOpen={menuOpen} />
      </div>
      
      <BrandSection/>
      <FeaturedWork/>
      <ServicesSection/>
      <WhatsNew/>
      <ReadyToRise></ReadyToRise>
      <Footer/>
      
    </>
  );
}

export default App;