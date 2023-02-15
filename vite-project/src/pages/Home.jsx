import { React, Fragment } from "react";
import HeroSection from "../components/hero-section/HeroSection";
import FeatureSection from "../components/feature-section/FeatureSection";
import TestimonialSection from "../components/testimonial-section/TestimonialSection";
import Footer from "../components/footer/Footer";
const Home = ({ mainMenuIsClosed, setMainMenuIsClosed }) => {
  return (
    <Fragment>
      <HeroSection
        mainMenuIsClosed={mainMenuIsClosed}
        setMainMenuIsClosed={setMainMenuIsClosed}
      />
      <main>
        <FeatureSection mainMenuIsClosed={mainMenuIsClosed} />
        <TestimonialSection />
        <Footer />
      </main>
    </Fragment>
  );
};

export default Home;
