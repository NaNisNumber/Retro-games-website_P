import { React, Fragment } from "react";
import HeroSection from "../components/hero-section/HeroSection";
import FeatureSection from "../components/feature-section/FeatureSection";
import { FaqSection } from "../components/faq-section/FaqSection";

const Home = ({ mainMenuIsClosed, setMainMenuIsClosed }) => {
  return (
    <Fragment>
      <HeroSection
        mainMenuIsClosed={mainMenuIsClosed}
        setMainMenuIsClosed={setMainMenuIsClosed}
      />
      <FeatureSection mainMenuIsClosed={mainMenuIsClosed} />
      <FaqSection />
    </Fragment>
  );
};

export default Home;
