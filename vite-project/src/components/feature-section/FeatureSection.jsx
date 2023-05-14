import { React, Fragment, useState, useRef } from "react";
import "./FeatureSection.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FeatureSection = ({ mainMenuIsClosed }) => {
  const sliderRef = useRef(null);
  const slidesContainer = useRef(null);
  const [games, setSliderGames] = useState([]);
  const [currentSliderGameId, setCurrentSliderGameId] = useState(null);
  const [sliderDirection, setSliderDirection] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slidesRef = useRef(null);

  const getSlidesMap = () => {
    if (!slidesRef.current) {
      slidesRef.current = new Map();
    }

    return slidesRef.current;
  };

  useEffect(() => {
    // games for slider
    const retrieveGameData = async () => {
      const response = await fetch("http://localhost:5001/");
      const games = await response.json();
      setSliderGames(games);
    };
    retrieveGameData();
  }, []);

  function createSlides() {
    if (games.length === 0) return;
    const sliderImgs = games.map((game, i) => {
      const gameUrl = game.imgUrl;
      const gameId = game.id;
      return (
        <figure
          key={gameId}
          ref={(slide) => {
            const map = getSlidesMap();

            if (slide) {
              map.set(i, slide);
            }
          }}
          data-gameid={gameId}
          className="gaming__feature-img-container"
        >
          <img
            alt="game"
            src={gameUrl}
            className="gaming__feature-slider-img"
          />
        </figure>
      );
    });
    return sliderImgs;
  }
  const slides = createSlides();

  useEffect(() => {
    if (!slidesRef.current) return;
    const currentSlide = slidesRef.current.get(currentSlideIndex);
    if (currentSlide) {
      const currentGameId = currentSlide.dataset.gameid;
      setCurrentSliderGameId(currentGameId);
    }
  }, [slidesRef.current, games, currentSlideIndex]);

  useEffect(() => {
    if (!slidesRef.current || !slidesRef.current.size) return;
    const changeSlidesPosition = () => {
      const slideWidth = slidesRef.current.get(0).getBoundingClientRect().width;
      for (let i = 0; i < slidesRef.current.size; i++) {
        slidesRef.current.get(i).style.left = `${slideWidth * i}px`;
      }
    };

    changeSlidesPosition();
  }, [slidesRef.current, games]);

  useEffect(() => {
    if (!slidesRef.current) return;
    if (
      !sliderRef ||
      slidesRef.current.size - 1 < 0 ||
      currentSlideIndex > slidesRef.current.size - 1
    )
      return;
    let intervalId = setInterval(() => {
      return nextSlide();
    }, 2500);

    sliderRef.current.addEventListener("mouseenter", () => {
      clearInterval(intervalId);
    });

    sliderRef.current.addEventListener("mouseleave", () => {
      intervalId = setInterval(() => {
        return nextSlide();
      }, 2500);
    });
  }, [slidesRef.current, mainMenuIsClosed]);

  function nextSlide() {
    setSliderDirection((prevSliderDirection) => prevSliderDirection - 100);
    setCurrentSlideIndex((prevSliderIndex) => prevSliderIndex + 1);
  }

  function prevSlide(lastSlideIndex) {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(lastSlideIndex);
      setSliderDirection(-`${lastSlideIndex * 100}`);
    } else if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
      setSliderDirection((prevSliderDirection) => prevSliderDirection + 100);
    }
  }

  useEffect(() => {
    if (!slidesRef.current) return;
    const lastSlideIndex = slidesRef.current.size - 1;

    if (currentSlideIndex > lastSlideIndex) {
      setSliderDirection(0);
      setCurrentSlideIndex(0);
    }
    // move slides

    slidesRef.current.forEach((slide) => {
      slide.style.transform = `translateX(${sliderDirection}%)`;
    });
  }, [slidesRef.current, currentSlideIndex]);

  const moveSlides = (e) => {
    const lastSlideIndex = slidesRef.current.size - 1;

    if (e.target.parentElement.id === "gaming__feature-move-slider-prev") {
      prevSlide(lastSlideIndex);
    } else nextSlide();
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
              <Link to={`shop/${currentSliderGameId}`}>
                <button className="gaming__feature-game-page-btn">
                  See Game
                </button>
              </Link>
            </div>
            <div
              ref={slidesContainer}
              className="gaming__feature-slides-container"
            >
              {slides}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FeatureSection;
