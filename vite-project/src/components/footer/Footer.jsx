import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView();

  const displayScrollUpArrow = () => {
    const scrollUpArrow = document.querySelector(".gaming__scroll-up-arrow");
    if (!scrollUpArrow) return;
    if (inView) {
      scrollUpArrow.classList.remove("gaming__scroll-up-arrow-hidden");
    } else {
      scrollUpArrow.classList.add("gaming__scroll-up-arrow-hidden");
    }
  };
  displayScrollUpArrow();

  return (
    <footer ref={ref}>
      <main className="gaming__footer-main-container">
        <ul className="gaming__footer-container">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Go to login</Link>
          </li>
          <li>
            <Link to={"/register"}>Go to register</Link>
          </li>
        </ul>
        <ul className="gaming__footer-container">
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/shop"}>Games</Link>
          </li>
        </ul>
        <ul className="gaming__footer-container-social">
          <li>
            <Link to={"https://ro-ro.facebook.com/"}>
              <ion-icon
                class="gaming__footer-social-icon"
                name="logo-facebook"
              ></ion-icon>
            </Link>
          </li>
          <li>
            <Link to={"https://www.instagram.com/"}>
              <ion-icon
                class="gaming__footer-social-icon"
                name="logo-instagram"
              ></ion-icon>
            </Link>
          </li>
          <li>
            <Link to={"https://twitter.com/?lang=ro"}>
              <ion-icon
                class="gaming__footer-social-icon"
                name="logo-twitter"
              ></ion-icon>
            </Link>
          </li>
        </ul>
      </main>
    </footer>
  );
};

export default Footer;
