import { React, Fragment, useState, useRef } from "react";
import { nanoid } from "nanoid";
import "./FeatureSection.css";
import { useEffect } from "react";

const FeatureSection = ({ mainMenuIsClosed }) => {
  const [sliderImgsExist, setSliderImgsExist] = useState(false);
  const sliderRef = useRef(null);
  const [games, setSliderGames] = useState([]);

  useEffect(() => {
    const retrieveGameData = async () => {
      const response = await fetch("http://localhost:5001/");
      const games = await response.json();
      setSliderGames(games);
    };
    retrieveGameData();
  }, []);

  function createSliders() {
    if (games.length === 0) return;
    const sliderImgs = games.map((game) => {
      const gameUrl = game.imgUrl;

      return (
        <figure key={nanoid()} className="gaming__feature-img-container">
          <img
            alt="game"
            src={gameUrl}
            className="gaming__feature-slider-img"
          />
        </figure>
      );
    });
    if (sliderImgsExist) return sliderImgs;
    setSliderImgsExist(true);
  }

  const sliderSettings = {
    direction: 0,
    currentSlideIndex: 0,
  };

  useEffect(() => {
    const slides = document.querySelectorAll(".gaming__feature-img-container");

    if (!sliderRef) return;
    const lastSlideIndex = slides.length - 1;

    let intervalId = setInterval(() => {
      return nextSlide(lastSlideIndex, slides);
    }, 2500);
    sliderRef.current.addEventListener("mouseenter", () => {
      clearInterval(intervalId);
    });
    sliderRef.current.addEventListener("mouseleave", () => {
      intervalId = setInterval(() => {
        return nextSlide(lastSlideIndex, slides);
      }, 2500);
    });
    const changeSlidesPosition = () => {
      const slideWidth = slides[0].getBoundingClientRect().width;
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = `${slideWidth * i}px`;
      }
    };
    if (sliderImgsExist) {
      changeSlidesPosition();
    }
  }, [sliderImgsExist, mainMenuIsClosed]);

  function nextSlide(lastSlideIndex, slides) {
    sliderSettings.direction -= 100;
    sliderSettings.currentSlideIndex++;

    if (sliderSettings.currentSlideIndex > lastSlideIndex) {
      sliderSettings.currentSlideIndex = 0;
      sliderSettings.direction = 0;
    }

    slides.forEach((slide) => {
      slide.style.transform = `translateX(${sliderSettings.direction}%)`;
    });
  }

  function prevSlide(lastSlideIndex, slides) {
    if (sliderSettings.currentSlideIndex === 0) {
      sliderSettings.currentSlideIndex = lastSlideIndex;
      sliderSettings.direction = -`${lastSlideIndex * 100}`;
    } else if (sliderSettings.currentSlideIndex > 0) {
      sliderSettings.currentSlideIndex--;
      sliderSettings.direction += 100;
    }
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${sliderSettings.direction}%)`;
    });
  }

  const moveSlides = (e) => {
    const slides = document.querySelectorAll(".gaming__feature-img-container");
    const lastSlideIndex = slides.length - 1;

    if (e.target.parentElement.id === "gaming__feature-move-slider-prev") {
      prevSlide(lastSlideIndex, slides);
    } else nextSlide(lastSlideIndex, slides);
  };

  return (
    <Fragment>
      <section className="gaming__feature-section">
        <header className="gaming__feature-header">
          <h1 className="gaming__feature-heading">
            The games that make you feel nostalgic
          </h1>
        </header>
        <div className="gaming__feature-details-container">
          <div className="gaming__feature-details">
            <div className="gaming__feature-detail-container gaming__feature-variety-details">
              <ion-icon
                className="gaming__feature-detail-icon"
                name="infinite"
              />
              <p className="gaming__feature-detail">Large variety</p>
              <p className="gaming__feature-text">
                We have 50+ games in our list from which you can choose
              </p>
            </div>
            <div className="gaming__feature-detail-container gaming__feature-genres-details">
              <ion-icon name="layers"></ion-icon>
              <p className="gaming__feature-detail">Different genres</p>
              <p className="gaming__feature-text">
                Classic arcade games, platformers, RPGs, and more.
              </p>
            </div>
            <div className="gaming__feature-detail-container gaming__feature-about-details">
              <ion-icon name="checkbox"></ion-icon>
              <p className="gaming__feature-detail">Carefully selected</p>
              <p className="gaming__feature-text">
                Each game is carefully selected and curated to provide an
                authentic and nostalgic gaming experience for our users.
              </p>
            </div>
          </div>
          <div ref={sliderRef} className="gaming__feature-slider">
            <button
              onClick={(e) => {
                moveSlides(e);
              }}
              id="gaming__feature-move-slider-prev"
              className="gaming__feature-move-slider-left-btn gaming__move-btn"
            >
              <ion-icon name="arrow-back"></ion-icon>
            </button>
            <button
              onClick={(e) => {
                moveSlides(e);
              }}
              className="gaming__feature-move-slider-right-btn gaming__move-btn"
            >
              <ion-icon name="arrow-forward"></ion-icon>
            </button>
            <div className="gaming__feature-game-cta-container">
              <button className="gaming__feature-game-page-btn">
                See Game
              </button>
            </div>
            {createSliders()}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FeatureSection;
