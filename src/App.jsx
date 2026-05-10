// App.jsx

import { useState } from "react";

import TopBar from "./components/TopBar";
import MainNavbar from "./components/MainNavbar";
import Hero from "./components/Hero";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <TopBar />

      <MainNavbar setMenuOpen={setMenuOpen} />

      <Hero menuOpen={menuOpen} />
    </>
  );
}

export default App;