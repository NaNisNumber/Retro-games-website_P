import { React, Fragment } from "react";
import HeroSection from "../components/hero-section/HeroSection";
import FeatureSection from "../components/feature-section/FeatureSection";
import { FaqSection } from "../components/faq-section/FaqSection";

const Home = ({
  mainMenuIsClosed,
  setMainMenuIsClosed,
  games,
  setSliderGames,
}) => {
  return (
    <Fragment>
      <HeroSection
        mainMenuIsClosed={mainMenuIsClosed}
        setMainMenuIsClosed={setMainMenuIsClosed}
      />
      <FeatureSection
        mainMenuIsClosed={mainMenuIsClosed}
        games={games}
        setSliderGames={setSliderGames}
      />
      <FaqSection />
    </Fragment>
  );
};

export default Home;
