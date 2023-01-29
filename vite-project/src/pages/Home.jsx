import React from "react";
import HeroSection from "../components/hero-section/HeroSection";

const Home = ({ mainMenuIsClosed, setMainMenuIsClosed }) => {
  return (
    <HeroSection
      mainMenuIsClosed={mainMenuIsClosed}
      setMainMenuIsClosed={setMainMenuIsClosed}
    />
  );
};

export default Home;
