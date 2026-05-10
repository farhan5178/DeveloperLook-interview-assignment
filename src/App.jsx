// App.jsx

import { useState } from "react";

import TopBar from "./components/TopBar";
import MainNavbar from "./components/MainNavbar";
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

      <MainNavbar setMenuOpen={setMenuOpen} />

      <Hero menuOpen={menuOpen} />
      
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